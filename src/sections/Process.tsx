import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

const steps = ["Listen", "Understand", "Shape", "Care"];

export default function Process() {
  return (
    <SectionShell className="process">
      <Reveal>
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>A slower, closer way to build your digital presence.</h2>
        </div>
      </Reveal>
      <div className="process-list">
        {steps.map((step, index) => (
          <Reveal key={step}>
            <div className="process-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
