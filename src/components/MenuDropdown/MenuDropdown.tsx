import {
  AccountCircle,
  Search,
  ShoppingBag,
  UsbOffRounded,
} from "@mui/icons-material";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import { useState } from "react";

interface MenuDropdownProps {
  label: string;
  data: any;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  label = "",
  data = null,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {data?.type === "group" && !data?.icon ? (
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: "#00B19D",
            fontSize: "13px",
            display: { xs: "none", md: "block" },
          }}
          onClick={handleClick}
        >
          {label}
        </Button>
      ) : (
        <button
          type="button"
          style={{
            color: "#00B19D",
            fontSize: "13px",
            background: "transparent",
            outline: "none",
            border: "none",
          }}
          onClick={handleClick}
        >
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            {data?.icon === "Account" && <AccountCircle />}
            {data?.icon === "Search" && <Search />}
          </Box>
          {data?.icon === "Cart" && <ShoppingBag />}
        </button>
      )}
      <Menu
        sx={{
          borderRadius: "9px 0 9px 9px",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data?.items &&
          data.items.map((item: any) => (
            <MenuItem
              key={item?.id}
              sx={{
                fontSize: "14px",
                "a:-webkit-any-link": {
                  textDecoration: "none !important",
                },
                ":hover": {
                  backgroundColor: "#0076CF1A",
                },
              }}
              onClick={handleClose}
            >
              <a
                style={{
                  color: "#141B4D",
                }}
                href={item?.linkTo}
                target="_self"
                rel="nofollow noopener"
              >
                {item?.title}
              </a>
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default MenuDropdown;
