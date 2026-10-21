import { NavBar } from "@/components/ds/NavBar";
import { PointerLight } from "@/components/motion/PointerLight";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { About } from "@/components/sections/About";
import { BuildLog } from "@/components/sections/BuildLog";
import { Built } from "@/components/sections/Built";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { StructuredData } from "@/components/seo/StructuredData";
import { Hero } from "@/components/sections/Hero";
import { Ideas } from "@/components/sections/Ideas";
import { Practice } from "@/components/sections/Practice";
import { Proof } from "@/components/sections/Proof";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { navCta, navLinks } from "@/lib/content";

export default function Home() {
  return (
    <div className="oe-on-dark min-h-svh bg-ink">
      {/* Reading progress: a SensViz-blue line along the top edge, driven by scroll (styles/motion.css). */}
      <div aria-hidden="true" className="oe-progress" />
      {/* Plain navigation on the page ground: wordmark, three links, one action. No bar. */}
      <header className="relative z-30">
        <div className="oe-page">
          <NavBar onDark links={navLinks} current="home" cta={navCta} />
        </div>
      </header>

      {/* Sections are separated by space and changes of field colour, never by rules. */}
      <main>
        <Hero />
        <BuildLog />
        <Practice />
        <Capabilities />
        <Built />
        <Proof />
        <About />
        <Ideas />
        <Faq />
        <Contact />
      </main>

      <SiteFooter />
      <StructuredData />
      <RevealObserver />
      <PointerLight />
    </div>
  );
}
