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

export function Referenzenauszug({ slot,onRefresh }) {
  const aReferenzenauszug = dataCollection.Referenzenauszug;

  const [selectedReferenzenauszug, setSelectedReferenzenauszug] =
    useState(aReferenzenauszug);

  const onChangeSearchReferenzenauszug = (event) => {
    const searchedReferenzenauszugText = event.target.value;
    setSelectedReferenzenauszug(
      aReferenzenauszug.filter((item) => {
        return item.ReferenzenauszugText === searchedReferenzenauszugText;
      })
    );
  };

  const onSort = () => {
    aReferenzenauszug.sort((a, b) =>
      a.ReferenzenauszugText > b.ReferenzenauszugText ? 1 : -1
    );
    window.location.reload();
  };

  return (
    <div slot={slot}>
      <Bar
        endContent={
          <>
            <Input
              icon={<Icon name="search" />}
              onChange={onChangeSearchReferenzenauszug}
              placeholder="Search"
            />
            <Button icon="refresh" onClick={onRefresh} />
            <Button icon="sort" onClick={onSort} />
          </>
        }
      ></Bar>
      <List headerText="Referenzenauszug" mode="Delete">
        {selectedReferenzenauszug.map((item) => (
          <StandardListItem type="Detail"
            key={"ReferenzenauszugId_" + item.ReferenzenauszugText}
            data-name={item.ReferenzenauszugText}
          >
            {item.ReferenzenauszugText}
          </StandardListItem>
        ))}
      </List>
    </div>
  );
}
