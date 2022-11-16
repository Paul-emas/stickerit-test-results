import { SxProps, Theme } from "@mui/material";
import React, { FC } from "react";
import { BulletListItem } from "../BulletListItem";
import { BulletListStyled } from "./BulletList.styles";

export type BulletListProps = {
  items: { id: string; text: string; to?: string }[];
  sx?: SxProps<Theme>;
  className?: string;
  sm?: boolean;
};

export const BulletList: FC<BulletListProps> = ({
  sm,
  items,
  sx,
  className,
}) => (
  <BulletListStyled sm={sm} sx={sx} className={className}>
    {items.map(({ id, text, to }) => (
      <BulletListItem key={id} text={text} to={to} sm={sm} />
    ))}
  </BulletListStyled>
);
