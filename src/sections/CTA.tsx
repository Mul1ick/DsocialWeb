import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

export default function CTA() {
  return (
    <SectionShell id="contact" className="cta-section">
      <Reveal>
        <h2>Let&apos;s sit with your brand and see what it wants to become.</h2>
        <a className="outline-button" href="mailto:hello@dsocial.studio">
          Begin a Conversation
          <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </Reveal>
    </SectionShell>
  );
}
