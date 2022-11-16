import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Dropdown from "../Dropdown/Dropdown";
import StickerDropdown from "../StickerDropdown/StickerDropdown";
import data from "../../menu.json";
import { ButtonLink } from "../ButtonLink";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import Container from "@mui/material/Container";
import CollapseMenu from "../CollapseMenu/CollapseMenu";

interface Props {
  window?: () => Window;
}

const mobileNavWidth = 240;

const NavContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.colors.greenLight,
  height: "56px",
  boxShadow: "none",
}));

const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.colors.blue,
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
}));

const Navbar: React.FC<Props> = (props) => {
  const { window } = props;
  const [navigationData, setNavigationData] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any>(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (item: any) => {
    setActiveMenu(item);
  };

  useEffect(() => {
    if (data) setNavigationData(data);
  }, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        width: "100%",
        height: "56px",
        top: "0px",
        left: "0px",
        alignItems: "center",
        backgroundColor: "#99f2e4",
      }}
    >
      {navigationData ? (
        <>
          <NavContainer>
            <Container maxWidth="xl">
              <Toolbar
                sx={{
                  minHeight: "56px !important",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    display: { sm: "block", lg: "none", color: "#AEB4B0" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <LogoText
                  variant="h5"
                  sx={{
                    width: {
                      xs: "100%",
                      md: "auto",
                    },
                  }}
                >
                  Sticker It
                </LogoText>
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex", alignItems: "center" },
                    gap: "0 10px",
                    marginLeft: "40px",
                  }}
                >
                  {navigationData?.primary &&
                    navigationData?.primary.map((item: any) => (
                      <div key={item.id}>
                        {item.type === "group" && !item.linkTo ? (
                          <>
                            <Button
                              sx={{
                                fontSize: "16px",
                                color: "#141B4D",
                              }}
                              endIcon={
                                activeMenu?.id === item.id ? (
                                  <KeyboardArrowUp />
                                ) : (
                                  <KeyboardArrowDown />
                                )
                              }
                              onMouseEnter={() => handleClick(item)}
                            >
                              {item.title}
                            </Button>
                            <Box
                              sx={{
                                opacity:
                                  activeMenu?.id === item.id ? "100%" : "0",
                                visibility:
                                  activeMenu?.id === item.id
                                    ? "visible"
                                    : "invisible",
                                transitionDuration: "0.2s",
                              }}
                            >
                              <Dropdown>
                                <StickerDropdown data={item} />
                              </Dropdown>
                            </Box>
                          </>
                        ) : (
                          <>
                            {item.type !== "divider" ? (
                              <ButtonLink
                                sx={{
                                  fontSize: "16px",
                                  color: "#141B4D",
                                }}
                                to={item.linkTo ?? "/"}
                              >
                                {item.title}
                              </ButtonLink>
                            ) : null}
                          </>
                        )}
                      </div>
                    ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  {navigationData?.secondary &&
                    navigationData?.secondary.map((item: any) => (
                      <MenuDropdown
                        key={item?.id}
                        label={item.title}
                        data={item}
                      />
                    ))}
                </Box>
              </Toolbar>
            </Container>
          </NavContainer>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: mobileNavWidth,
                },
              }}
            >
              <Box sx={{ paddingBottom: "40px" }}>
                <CollapseMenu
                  type="primary"
                  menuItems={navigationData?.primary}
                />
                <Divider />
                <CollapseMenu
                  type="secondary"
                  menuItems={navigationData?.secondary}
                />
              </Box>
            </Drawer>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default Navbar;
