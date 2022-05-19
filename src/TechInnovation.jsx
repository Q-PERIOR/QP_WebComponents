import {
  FlexibleColumnLayout,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { dataCollection } from "./data";
import { ServicePortofolio } from "./ServicePortofolio";
import { Details } from "./Details";

export function TechInnovation() {
  return (
    <FlexibleColumnLayout
      layout="TwoColumnsMidExpanded"
      hideArrows
      startColumn={
        <>
          <ServicePortofolio data={dataCollection} />
        </>
      }
      midColumn={
        <>
          <Details data={dataCollection} />
        </>
      }
    />
  );
}
