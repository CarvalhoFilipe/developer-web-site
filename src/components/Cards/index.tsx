import { FaReact } from "react-icons/fa";
import { SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import "./styles.scss";
import { Card } from "./Card";
export function Cards() {
  return (
    <div className="container-cards">
      <div className="title-card">
        <h2>Feramentas utilizadas</h2>
      </div>

      <div className="cards">
        <Card title="React js" children={<FaReact />} delay={1} />
        <Card title="TypeScript" children={<SiTypescript />} delay={1.5} />
        <Card title="Css3" children={<SiCss3 />} delay={2} />
        <Card title="Html5" children={<SiHtml5 />} delay={2.5} />
      </div>
    </div>
  );
}
