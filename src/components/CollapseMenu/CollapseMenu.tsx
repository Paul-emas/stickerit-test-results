import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "gatsby";
import React, { useState } from "react";
import CollapseItem from "../CollapseItem/CollapseItem";
import { SearchBox } from "../SearchBox";

interface CollapseMenuProps {
  menuItems: any;
  type: "primary" | "secondary";
}

const CollapseMenu: React.FC<CollapseMenuProps> = ({
  menuItems = [],
  type = "primary",
}) => {
  const [activeMenu, setActiveMenu] = useState<any>(false);

  const handleClick = (menu: any): void => {
    setActiveMenu(menu);
  };

  return (
    <List aria-labelledby="nested-list-subheader" component="nav">
      {menuItems?.length &&
        menuItems.map((item: any) => (
          <Box key={item?.id}>
            {item.type === "group" && !item.linkTo ? (
              <Box>
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
                          }
                        : {
                            fontFamily: "Poppins",
                            color: "#141B4D",
                            textTransform: "uppercase",
                            span: {
                              fontSize: "14px !important",
                            },
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
                <CollapseItem
                  condition={activeMenu?.id === item?.id ?? false}
                  data={item}
                  type={type}
                />
              </Box>
            ) : (
              <>
                {item.type !== "divider" && item.icon !== "Cart" ? (
                  <Box>
                    {item.icon !== "Search" ? (
                      <Link
                        style={{
                          textDecoration: "none",
                        }}
                        to={item?.linkTo}
                      >
                        <ListItem key={item?.id} disablePadding>
                          <ListItemButton
                            sx={{
                              ...(type === "secondary"
                                ? {
                                    textAlign: "center",
                                    fontFamily: "Poppins",
                                    fontSize: "14px",
                                    color: "#7F8481",
                                  }
                                : {
                                    textAlign: "center",
                                    fontFamily: "Poppins",
                                    fontSize: "14px",
                                    textTransform: "uppercase",
                                    color: "#141B4D",
                                  }),
                            }}
                          >
                            {item.title}
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ) : (
                      <Box
                        sx={{
                          padding: "0 10px",
                          marginTop: "10px",
                        }}
                      >
                        <SearchBox
                          placeholder="Search for anything"
                          value=""
                          onChange={function (value: string): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                ) : null}
              </>
            )}
          </Box>
        ))}
    </List>
  );
};

export default CollapseMenu;
