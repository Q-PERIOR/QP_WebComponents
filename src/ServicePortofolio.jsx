import {
  StandardListItem,
  Title,
  Panel,
  ObjectPage,
  DynamicPageHeader,
} from "@ui5/webcomponents-react";
import { dataCollection } from "./data";

const aServivePortofolio = dataCollection.ServicePortofolio;

export function ServicePortofolio({slot, data}) {
  return (
    <div slot={slot}>
      <ObjectPage
      headerTitle={
          <DynamicPageHeader>
            <Title>Service Portofolio</Title>
          </DynamicPageHeader>
        }
        >
        {aServivePortofolio.map((item) => (
          <Panel accessibleRole="Complementary" headerText={item.ServiceName} key={item.ServiceName}>
            {item.Details.map((itemDetails) => (
              <StandardListItem
                key={itemDetails.DetailId}
                data-name={itemDetails.Detail}
              >
                {itemDetails.Detail}
              </StandardListItem>
            ))}
          </Panel>
        ))}
      </ObjectPage>
    </div>
  );
}
