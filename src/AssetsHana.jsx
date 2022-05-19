import {
  List,
  StandardListItem,
  Input,
  Icon,
  Button,
  Bar,
  Dialog,
  Form,
  FormItem,
} from "@ui5/webcomponents-react";
import { useState } from "react";
import { useRef } from "react";
import { dataCollection } from "./data";

export function AssetsHana({ slot, onRefresh }) {
  const aAssets = dataCollection.Assets;

  const [selectedAssets, setSelectedAssets] = useState(aAssets);
  const [newAsset, setNewAsset] = useState({ AssetsId: null, AssetsText: "" });

  const onChangeSearchAssets = (event) => {
    const searchedAssetsText = event.target.value;
    setSelectedAssets(
      aAssets.filter((item) => {
        return item.AssetsText === searchedAssetsText;
      })
    );
  };

  const onSave = () => {
    selectedAssets.push(newAsset);
    setNewAsset({ newAsset });
    handleClose();
  };

  const dialogRef = useRef(null);

  const onOpenDialog = () => {
    dialogRef.current.show();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };
  return (
    <div slot={slot}>
      <Bar
        endContent={
          <>
            <Input
              icon={<Icon name="search" />}
              onChange={onChangeSearchAssets}
              placeholder="Search"
            />
            <Button icon="refresh" onClick={onRefresh} />
            <Button icon="popup-window" onClick={onOpenDialog} />
            <Dialog
              ref={dialogRef}
              footer={
                <>
                  <Button icon="complete" design="Positive" onClick={onSave} />
                  <Button
                    icon="decline"
                    design="Negative"
                    onClick={handleClose}
                  />
                </>
              }
            >
              <Form titleText="Add">
                <FormItem label={"Id"}>
                  <Input
                    value={newAsset.AssetsId}
                    onChange={(event) =>
                      setNewAsset({
                        ...newAsset,
                        AssetsId: event.target.value,
                      })
                    }
                  />
                </FormItem>
                <FormItem label={"Asset"}>
                  <Input
                    value={newAsset.AssetsText}
                    onChange={(event) =>
                      setNewAsset({
                        ...newAsset,
                        AssetsText: event.target.value,
                      })
                    }
                  />
                </FormItem>
              </Form>
            </Dialog>
          </>
        }
      ></Bar>
      <List headerText="S/4HANA Assets">
        {selectedAssets.map((item) => (
          <StandardListItem key={item.AssetsId} data-name={item.AssetsText}>
            {item.AssetsText}
          </StandardListItem>
        ))}
      </List>
    </div>
  );
}
