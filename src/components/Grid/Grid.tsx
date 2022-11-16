import React, { FC } from "react";
import { GridWrapper } from "./Grid.styles";

export type GridProps = {
  gap?: string;
};

export const Grid: FC<GridProps> = ({ gap, children }) => (
  <GridWrapper gap={gap}>{children}</GridWrapper>
);
