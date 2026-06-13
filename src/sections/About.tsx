import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
const principles = ["Listen first", "Design with feeling", "Stay close"];

export default function About() {
  return (
    <SectionShell id="about" className="about">
      <Reveal className="about-grid">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2>A studio built around attention.</h2>
          <p className="large-body">
            d.social is intentionally small. The work begins in conversation, then slowly
            becomes a visual language a brand can keep returning to.
          </p>
        </div>
        <div className="about-principles" aria-label="Studio principles">
          {principles.map((principle, index) => (
            <div key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
