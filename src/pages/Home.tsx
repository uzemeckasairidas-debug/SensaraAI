import { lazy, Suspense } from 'react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Hero } from '../components/sections/Hero';
import { WhatIDo } from '../components/sections/WhatIDo';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { CaseStudies } from '../components/sections/CaseStudies';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { CTABanner } from '../components/ui/CTABanner';

const OrbScene = lazy(() =>
  import('../components/three/OrbScene').then((m) => ({ default: m.OrbScene }))
);

export function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Suspense fallback={null}>
        <OrbScene />
      </Suspense>
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <Services />
        <CTABanner title={t.cta.title} subtitle={t.cta.subtitle} buttonLabel={t.hero.primaryCta} />
        <Process />
        <CaseStudies />
        <Trust />
        <CTABanner
          title={t.servicesPage.ctaTitle}
          subtitle={t.servicesPage.ctaSubtitle}
          buttonLabel={t.hero.primaryCta}
        />
        <Contact />
      </main>
    </>
  );
}
