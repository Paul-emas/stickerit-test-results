import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { ButtonLink } from "../ButtonLink";
import StickerItem from "../StickerItem/StickerItem";

interface StickerCollapseProps {
  condition: boolean;
  data: any;
}

const StickerCollapse: React.FC<StickerCollapseProps> = ({
  condition = false,
  data = null,
}) => {
  return (
    <Collapse in={condition} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {data?.items.length > 0 &&
          data?.items.map((item: any) => (
            <ListItemButton key={item?.id}>
              <StickerItem size="small" {...item} />
            </ListItemButton>
          ))}
        {data.moreSection ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonLink
              sx={{
                borderRadius: "9px",
              }}
              size="small"
              to={data.moreSection.linkTo ?? "/"}
              target="_self"
            >
              {data.moreSection.title}
            </ButtonLink>
          </Box>
        ) : null}
      </List>
    </Collapse>
  );
};

export default StickerCollapse;
