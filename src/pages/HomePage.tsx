import { lazy, Suspense } from "react";
import SiteLayout from "../layouts/SiteLayout";
import Hero from "../sections/Hero";
// import OurApproach from "../sections/OurApproach";
// import Philosophy from "../sections/Philosophy";
// import Process from "../sections/Process";
// import SelectedWork from "../sections/SelectedWork";

const About = lazy(() => import("../sections/About"));
const ClientsCanvas = lazy(() => import("../sections/ClientCanvas"));
const StudioMoments = lazy(() => import("../sections/StudioMoments"));
const Stats = lazy(() => import("../sections/Stats"));
const Services = lazy(() => import("../sections/Services"));
const Testimonials = lazy(() => import("../sections/Testimonial"));
const CTA = lazy(() => import("../sections/CTA"));

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <ClientsCanvas />
        <StudioMoments />
        <Stats />
        {/* <OurApproach /> */}
        <Services />
        {/* <SelectedWork /> */}
        {/* <Philosophy /> */}
        {/* <Process />/ */}
        <Testimonials />
        <CTA />
      </Suspense>
    </SiteLayout>
  );
}
