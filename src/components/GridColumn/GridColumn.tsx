import React, { FC } from "react";
import { GridColumnWrapper } from "./GridColumn.styles";

export type GridColumnProps = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const GridColumn: FC<GridColumnProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => (
  <GridColumnWrapper xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    {children}
  </GridColumnWrapper>
);
