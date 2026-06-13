import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

const services = [
  {
    name: "Conceptualisation",
    description: "We listen closely before shaping the direction.",
    note: "Voice, mood, references and the quiet instincts behind the brand.",
  },
  {
    name: "Content Creation",
    description: "Photography, reels and visual storytelling made around your pace.",
    note: "Planned with room for the spontaneous parts that make it feel real.",
  },
  {
    name: "Social Media Management",
    description: "Gentle consistency, daily care and a voice that feels like you.",
    note: "A steady rhythm of posting, checking in, refining and responding.",
  },
];

export default function Services() {
  return (
    <SectionShell id="services" className="services">
      <Reveal>
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>Creative support that feels close, not outsourced.</h2>
        </div>
      </Reveal>
      <div className="service-list">
        {services.map((service) => (
          <Reveal key={service.name}>
            <a className="service-row" href="mailto:hello@dsocial.studio">
              <span>{service.name}</span>
              <p>
                {service.description}
                <small>{service.note}</small>
              </p>
              <ArrowRight size={22} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
