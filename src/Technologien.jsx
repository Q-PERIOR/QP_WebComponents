import {
  List,
  StandardListItem,
  Input,
  Icon,
  Button,
  Bar,
} from "@ui5/webcomponents-react";
import { useState } from "react";
import { dataCollection } from "./data";

export function Technologien({ slot,onRefresh }) {
  const aTechnologien = dataCollection.Technologien;

  const [selectedTechnologien, setSelectedTechnologien] =
    useState(aTechnologien);

  const onChangeSearchTechnologien = (event) => {
    const searchedTechnologienText = event.target.value;
    setSelectedTechnologien(
      aTechnologien.filter((item) => {
        return item.TechnologienText === searchedTechnologienText;
      })
    );
  };

  return (
    <div slot={slot}>
      <Bar
        endContent={
          <>
            <Input
              icon={<Icon name="search" />}
              onChange={onChangeSearchTechnologien}
              placeholder="Search"
            />
            <Button icon="refresh" onClick={onRefresh} />
          </>
        }
      ></Bar>
      <List headerText="Technologien und Know-How">
        {selectedTechnologien.map((item) => (
          <StandardListItem
            key={item.TechnologienId}
            data-name={item.TechnologienText}
          >
            {item.TechnologienText}
          </StandardListItem>
        ))}
      </List>
    </div>
  );
}
