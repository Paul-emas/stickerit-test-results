import { styled } from "@mui/material/styles";

type BulletListStyled = {
  sm?: boolean;
};

export const BulletListStyled = styled("ul", {
  shouldForwardProp: (prop) => prop !== "sm",
})<BulletListStyled>({
  padding: 0,
  margin: 0,
});
