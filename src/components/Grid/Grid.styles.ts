import { styled } from "@mui/material/styles";

type GridWrapperProps = {
  gap?: string;
};

export const GridWrapper = styled("div")<GridWrapperProps>(({ gap }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  ">div": {
    boxSizing: "border-box",
    paddingLeft: gap || 0,
    paddingRight: gap || 0,
  },
}));
