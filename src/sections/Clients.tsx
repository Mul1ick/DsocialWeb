import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import dkLogo from "../assets/Client Logos/D&K_logo.JPG";
import divineSpaceDesignLogo from "../assets/Client Logos/DivineSpaceDesign_logo.jpeg";
import gildedLogo from "../assets/Client Logos/Gilded_logo.jpeg";
import njpLogo from "../assets/Client Logos/NJP_logo.jpeg";
import pistyleLogo from "../assets/Client Logos/Pistyle_logo.JPG";
import polkaLogo from "../assets/Client Logos/Polka_logo.JPG";
import spLogo from "../assets/Client Logos/SP_logo.JPG";
import toLogo from "../assets/Client Logos/TO_logo.jpeg";
import aquellaLogo from "../assets/Client Logos/aquella_logo.JPG";
import rearrangeKidsLogo from "../assets/Client Logos/rearrange_kids_logo.JPG";
import rearrangeLogo from "../assets/Client Logos/rearrange_logo.jpeg";
import shagunLogo from "../assets/Client Logos/shagun_logo.JPG";

const clients = [
  { name: "D&K", logo: dkLogo },
  { name: "Divine Space Design", logo: divineSpaceDesignLogo },
  { name: "Gilded", logo: gildedLogo },
  { name: "NJP", logo: njpLogo },
  { name: "Pistyle", logo: pistyleLogo },
  { name: "Polka", logo: polkaLogo },
  { name: "SP", logo: spLogo },
  { name: "TO", logo: toLogo },
  { name: "Aquella", logo: aquellaLogo },
  { name: "Rearrange Kids", logo: rearrangeKidsLogo },
  { name: "Rearrange", logo: rearrangeLogo },
  { name: "Shagun", logo: shagunLogo },
];

export default function Clients() {
  return (
    <SectionShell className="clients">
      <Reveal>
        <p className="section-kicker">Clients</p>
      </Reveal>
      <Reveal>
        <div className="client-wall" aria-label="Client logo wall">
          {clients.map((client) => (
            <figure key={client.name} className="client-logo">
              <img src={client.logo} alt={client.name} />
              <figcaption>{client.name}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
