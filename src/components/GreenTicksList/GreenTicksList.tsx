import { List } from "@mui/material";
import React, { FC } from "react";
import { GreenTicksListItem } from "../GreenTicksListItem";

export type GreenTicksListProps = {
  listItems: string[];
};

export const GreenTicksList: FC<GreenTicksListProps> = ({ listItems }) => {
  return (
    <List>
      {listItems.map((listItem, key) => {
        return (
          <GreenTicksListItem key={key} sx={{ paddingLeft: 0, marginLeft: 0 }}>
            {listItem}
          </GreenTicksListItem>
        );
      })}
    </List>
  );
};

export default GreenTicksList;
