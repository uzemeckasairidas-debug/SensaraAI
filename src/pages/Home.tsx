import { Hero } from '../components/sections/Hero';
import { DualFocus } from '../components/sections/DualFocus';
import { Process } from '../components/sections/Process';
import { BentoGrid } from '../components/sections/BentoGrid';
import { CaseStudies } from '../components/sections/CaseStudies';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <DualFocus />
      <Process />
      <BentoGrid />
      <CaseStudies />
      <Trust />
      <Contact />
    </main>
  );
}
