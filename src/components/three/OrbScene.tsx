import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const MODEL_PATH = '/models/orb.glb';
const TARGET_SIZE = 1.8;
useGLTF.preload(MODEL_PATH);

/** GLTF assets can come in at any authored scale — normalize to a known
 * size and re-center on its own origin so the rest of the scene (camera
 * distance, scroll positions, tilt) can rely on consistent units. */
function useNormalizedScene(scene: THREE.Group) {
  return useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = TARGET_SIZE / maxDim;
    clone.scale.setScalar(scale);
    clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    return clone;
  }, [scene]);
}

function OrbModel() {
  const { scene } = useGLTF(MODEL_PATH);
  const normalized = useNormalizedScene(scene);

  useEffect(() => {
    normalized.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [normalized]);

  return <primitive object={normalized} />;
}

/** Pulsing wireframe placeholder shown while the .glb streams in */
function OrbFallback() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.scale.setScalar(0.8 + Math.sin(t * 2) * 0.08);
    ref.current.rotation.y = t * 0.6;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#0066FF" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

/** Slow continuous spin + damped tilt toward the cursor, independent of scroll */
function TiltRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const autoAngle = useRef(0);
  const tilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame((_, delta) => {
    const group = ref.current;
    if (!group) return;
    const damp = Math.min(delta * 3, 1);
    autoAngle.current += delta * 0.15;
    tilt.current.x += (pointer.current.y * -0.22 - tilt.current.x) * damp;
    tilt.current.y += (pointer.current.x * 0.35 - tilt.current.y) * damp;
    group.rotation.x = tilt.current.x;
    group.rotation.y = autoAngle.current + tilt.current.y;
  });

  return <group ref={ref}>{children}</group>;
}

/**
 * GSAP ScrollTrigger drives this group's position/scale across the whole
 * Home page scroll: hero (right, floating) -> center stage (zoomed in) ->
 * drifting across the middle sections -> tucked away before the contact form.
 */
function ScrollRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group) return;

    const scrollRoot = document.querySelector('main') ?? document.body;
    group.position.set(1.6, 0.15, 0);
    group.scale.setScalar(0.85);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollRoot,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      tl.to(group.position, { x: 0, y: 0.1, z: 1.1, duration: 1, ease: 'none' }, 0)
        .to(group.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 1, ease: 'none' }, 0)
        .to(group.position, { x: -1.3, y: 0.3, z: 0.5, duration: 1, ease: 'none' }, 1)
        .to(group.position, { x: 1.2, y: -0.2, z: 0.8, duration: 1, ease: 'none' }, 2)
        .to(group.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 1, ease: 'none' }, 2)
        .to(group.position, { x: 0, y: 1.6, z: -0.6, duration: 1, ease: 'none' }, 3)
        .to(group.scale, { x: 0.55, y: 0.55, z: 0.55, duration: 1, ease: 'none' }, 3);
    });

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      ctx.revert();
    };
  }, []);

  return <group ref={ref}>{children}</group>;
}

export function OrbScene() {
  const { language } = useLanguage();

  // Section heights shift when copy changes length between LT/EN, which
  // moves the scroll-trigger boundaries — recalculate them after that layout settles.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [language]);

  return (
    <div className="hidden md:block fixed inset-0 z-[2] pointer-events-none" aria-hidden>
      <Canvas
        shadows="soft"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-radius={8}
        />
        <pointLight color="#0066FF" intensity={2} position={[-2.5, -1, 2]} />
        <Suspense fallback={<OrbFallback />}>
          <ScrollRig>
            <TiltRig>
              <OrbModel />
            </TiltRig>
          </ScrollRig>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
