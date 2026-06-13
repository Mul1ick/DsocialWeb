import SiteLayout from "../layouts/SiteLayout";
import About from "../sections/About";
import Clients from "../sections/Clients";
import CTA from "../sections/CTA";
import Hero from "../sections/Hero";
// import Philosophy from "../sections/Philosophy";
// import Process from "../sections/Process";
import SelectedWork from "../sections/SelectedWork";
import Services from "../sections/Services";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Services />
      <SelectedWork />
      {/* <Philosophy /> */}
      {/* <Process /> */}
      <Clients />
      <CTA />
    </SiteLayout>
  );
}
