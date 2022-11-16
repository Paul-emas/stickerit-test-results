import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchBoxWrapper = styled(Box)({
  position: "relative",
  maxWidth: "570px",
  marginLeft: "auto",
  marginRight: "auto",
});

export const SearchIcon = styled(Search)(({ theme }) => ({
  position: "absolute",
  right: "15px",
  top: "15px",
  textDecoration: "underline",
  color: theme.colors.greenDark,
}));

export const StyledInput = styled("input")(({ theme }) => ({
  borderRadius: "9px",
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.greyBorder}`,
  padding: "15px 50px 15px 15px",
  width: "100%",
  fontFamily: theme.typography.fontFamily,
  outlineColor: theme.colors.coolBlue,
  "::placeholder": {
    fontFamily: theme.typography.fontFamily,
  },
}));
