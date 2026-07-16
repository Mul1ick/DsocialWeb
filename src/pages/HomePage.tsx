import SiteLayout from "../layouts/SiteLayout";
import About from "../sections/About";
import Clients from "../sections/Clients";
import CTA from "../sections/CTA";
import FounderNote from "../sections/FounderNote";
import Hero from "../sections/Hero";
import OurApproach from "../sections/OurApproach";
// import Philosophy from "../sections/Philosophy";
import Process from "../sections/Process";
import SelectedWork from "../sections/SelectedWork";
import Services from "../sections/Services";
import StudioMoments from "../sections/StudioMoments";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <StudioMoments />
      <OurApproach />
      <Services />
      <SelectedWork />
      {/* <Philosophy /> */}
      <Process />
      <FounderNote />
      <Clients />
      <CTA />
    </SiteLayout>
  );
}
