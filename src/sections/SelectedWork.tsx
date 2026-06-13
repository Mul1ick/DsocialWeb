import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

const work = [
  {
    title: "Restaurant Identity",
    disciplines: ["Strategy", "Content", "Social"],
    tone: "work-image work-image--restaurant",
    note: "Hospitality",
    detail: "A warm visual rhythm for a place people return to.",
  },
  {
    title: "Fashion Label",
    disciplines: ["Campaign", "Reels", "Direction"],
    tone: "work-image work-image--fashion",
    note: "Campaign",
    detail: "Soft launches, sharper edits and a language of restraint.",
  },
  {
    title: "Personal Brand",
    disciplines: ["Positioning", "Content", "Voice"],
    tone: "work-image work-image--personal",
    note: "Presence",
    detail: "A digital presence shaped around the person, not a persona.",
  },
];

export default function SelectedWork() {
  return (
    <SectionShell id="work" className="selected-work">
      <Reveal>
        <div className="section-heading section-heading--wide">
          <p className="section-kicker">Selected Work</p>
          <h2>Visual worlds shaped around the people who live inside them.</h2>
        </div>
      </Reveal>
      <div className="work-list">
        {work.map((item, index) => (
          <Reveal key={item.title} className="work-item">
            <div className={item.tone} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <em>{item.note}</em>
            </div>
            <div className="work-meta">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul>
                {item.disciplines.map((discipline) => (
                  <li key={discipline}>{discipline}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
