import {
  Tab,
  TabContainer
} from "@ui5/webcomponents-react";
import { Referenzenauszug } from "./Referenzenauszug";
import { Beschleuniger } from "./Beschleuniger";
import { Technologien } from "./Technologien";
import { AssetsHana } from "./AssetsHana";

export function Details({ slot }) {
  const onRefresh = () => {
    window.location.reload();
  };

  return (
    <div slot={slot}>
      <TabContainer>
          <Tab icon="customer" selected>
            <Referenzenauszug onRefresh={onRefresh} />
          </Tab>
          <Tab icon="create-form" key="customer">
            <Beschleuniger onRefresh={onRefresh} />
          </Tab>
          <Tab icon="employee">
            <AssetsHana onRefresh={onRefresh} />
          </Tab>
          <Tab icon="laptop">
            <Technologien onRefresh={onRefresh} />
          </Tab>
        </TabContainer>
    </div>
  );
}
