import { styled } from "@mui/material/styles";

type ItemProps = {
  sm?: boolean;
};

export const Item = styled("li", {
  shouldForwardProp: (prop) => prop !== "sm",
})<ItemProps>(({ sm, theme }) => ({
  listStyle: "none",
  minWidth: "50%",
  boxSizing: "border-box",
  flexGrow: 1,
  flexBasis: 0,
  padding: "0 10px",
  position: "relative",
  a: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "&::after": {
    content: '" "',
    position: "absolute",
    left: "-8px",
    top: 0,
    marginTop: "9px",
    height: "7px",
    width: "7px",
    borderRadius: "10px",
    background: theme.colors.greenDark,
  },
}));
