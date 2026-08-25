import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Hero } from '../components/sections/Hero';
import { WhatIDo } from '../components/sections/WhatIDo';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { CaseStudies } from '../components/sections/CaseStudies';
import { Trust } from '../components/sections/Trust';
import { Contact } from '../components/sections/Contact';
import { CTABanner } from '../components/ui/CTABanner';

export function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Hero />
      <WhatIDo />
      <Services />
      <CTABanner title={t.cta.title} subtitle={t.cta.subtitle} buttonLabel={t.hero.primaryCta} />
      <Process />
      <CaseStudies />
      <Trust />
      <CTABanner title={t.servicesPage.ctaTitle} subtitle={t.servicesPage.ctaSubtitle} buttonLabel={t.hero.primaryCta} />
      <Contact />
    </main>
  );
}
