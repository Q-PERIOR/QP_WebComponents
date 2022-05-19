import {
  List,
  StandardListItem,
  Input,
  Icon,
  Button,
  Bar,
  Form,
  FormItem,
  TextArea,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { useState } from "react";
import { dataCollection } from "./data";

export function Beschleuniger({ slot, onRefresh }) {
  const aBeschleuniger = dataCollection.Beschleuniger;
  const [selectedBeschleuniger, setSelectedBeschleuniger] =
    useState(aBeschleuniger);

  const [updateValue, setUpdateValue] = useState({ id: null, text: "" });

  const [showForm, setShowForm] = useState(false);
  const [beschleunigerDelete, setBeschleunigerDelete] =
    useState(aBeschleuniger);
  const onChangeSearchBeschleuniger = (event) => {
    const searchedBeschleunigerText = event.target.value;
    setSelectedBeschleuniger(
      aBeschleuniger.filter((item) => {
        return item.BeschleunigerText === searchedBeschleunigerText;
      })
    );
  };

  const onShowForm = () => {
    setShowForm(true);
  };

  const onUpdate = () => {
    setBeschleunigerDelete(
      beschleunigerDelete.map((e) =>
        e.BeschleunigerId == updateValue.id
          ? { ...e, BeschleunigerText: updateValue.text }
          : e
      )
    );
  };

  const onStartUpdateProcess = (id) => {
    const clickedItem = beschleunigerDelete.find(
      (e) => e.BeschleunigerId == id
    );
    setUpdateValue({
      id: clickedItem.BeschleunigerId,
      text: clickedItem.BeschleunigerText,
    });
  };

  const onDelete = (element) => {
    let elementText = element.detail.item.dataset.name;
    setBeschleunigerDelete(
      beschleunigerDelete.filter((item) => {
        return item.BeschleunigerText !== elementText;
      })
    );
  };

  const renderListItem = (item) => (
    <StandardListItem
      id={item.BeschleunigerId}
      key={item.BeschleunigerText}
      data-name={item.BeschleunigerText}
      onClick={(event) => onStartUpdateProcess(event.target.id)}
    >
      {item.BeschleunigerText}
    </StandardListItem>
  );
  return (
    <div slot={slot}>
      <Bar
        endContent={
          <>
            <Input
              icon={<Icon name="search" />}
              onChange={onChangeSearchBeschleuniger}
              placeholder="Search"
            />
            <Button icon="refresh" onClick={onRefresh} />
          </>
        }
      ></Bar>
      <Form
        style={{
          display: showForm !== true ? "none" : "block",
        }}
      >
        <FormItem label={"Beschleuniger"}>
          <TextArea
            value={updateValue.text}
            onChange={(event) =>
              setUpdateValue({ ...updateValue, text: event.target.value })
            }
          />
          <Button icon="complete" onClick={onUpdate} />
        </FormItem>
      </Form>
      <List
        headerText="Beschleuniger"
        mode="Delete"
        onItemDelete={onDelete}
        onItemClick={onShowForm}
      >
        {beschleunigerDelete.map((item) => renderListItem(item))}
      </List>
    </div>
  );
}
