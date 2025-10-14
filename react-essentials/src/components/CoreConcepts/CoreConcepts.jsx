import { coreconcepts } from "../../data";
import Section from "../Section/Section";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" className="test">
      <div id="core-concepts">
        {coreconcepts.map((x) => (
          <CoreConcept key={x.title} {...x}></CoreConcept>
        ))}
      </div>
    </Section>
  );
}
