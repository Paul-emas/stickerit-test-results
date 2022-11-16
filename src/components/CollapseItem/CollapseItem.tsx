import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import StickerCollapse from "../StickerCollaspse/StickerCollaspse";

interface CollapseItemProps {
  condition: boolean;
  data: any;
  type: "primary" | "secondary";
}

const CollapseItem: React.FC<CollapseItemProps> = ({
  condition = false,
  data = null,
  type = "primary",
}) => {
  const [activeMenu, setActiveMenu] = useState<any>(false);

  const handleClick = (menu: any) => {
    setActiveMenu(menu);
  };

  return (
    <Collapse in={condition} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {data?.items.length > 0 &&
          data?.items.map((item: any) => (
            <Box key={item?.id}>
              {item?.items ? (
                <Collapse in={condition} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton onClick={() => handleClick(item)}>
                      <ListItemText
                        sx={{
                          ...(type === "secondary"
                            ? {
                                textAlign: "left",
                                fontFamily: "Poppins",
                                span: {
                                  fontSize: "14px !important",
                                },
                                color: "#7F8481",
                                pl: 2,
                              }
                            : {
                                fontFamily: "Poppins",
                                color: "#141B4D",
                                span: {
                                  fontSize: "14px !important",
                                },
                                pl: 2,
                              }),
                        }}
                        primary={item.title ?? ""}
                      />
                      {activeMenu?.id === item?.id ? (
                        <ExpandLess
                          sx={{
                            ...(type === "secondary"
                              ? { color: "#7F8481" }
                              : { color: "#141B4D" }),
                          }}
                        />
                      ) : (
                        <ExpandMore
                          sx={{
                            ...(type === "secondary"
                              ? { color: "#7F8481" }
                              : { color: "#141B4D" }),
                          }}
                        />
                      )}
                    </ListItemButton>
                    {item?.items && (
                      <StickerCollapse
                        condition={activeMenu?.id === item?.id}
                        data={item}
                      />
                    )}
                  </List>
                </Collapse>
              ) : (
                <ListItemButton
                  key={item?.id}
                  sx={{
                    ...(type === "secondary"
                      ? {
                          textAlign: "left",
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#7F8481",
                          pl: 4,
                        }
                      : {
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          color: "#141B4D",
                          pl: 4,
                        }),
                  }}
                >
                  {item.title}
                </ListItemButton>
              )}
            </Box>
          ))}
      </List>
    </Collapse>
  );
};

export default CollapseItem;
