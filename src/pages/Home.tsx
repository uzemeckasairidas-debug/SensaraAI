import { Hero } from '../components/sections/Hero';
import { DualFocus } from '../components/sections/DualFocus';
import { BentoGrid } from '../components/sections/BentoGrid';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <DualFocus />
      <BentoGrid />
      <Trust />
      <Contact />
    </main>
  );
}
