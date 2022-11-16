import { Typography } from "@mui/material";
import { Link } from "gatsby";
import React, { FC } from "react";
import { Item } from "./BulletListItem.styles";

export type BulletListItemProps = {
  text: string;
  sm?: boolean;
  to?: string;
};

export const BulletListItem: FC<BulletListItemProps> = ({ sm, text, to }) => {
  const textComponent = (
    <Typography
      component="span"
      variant={sm ? "body2" : "body1"}
      sx={{ fontWeight: "300" }}
    >
      {text}
    </Typography>
  );

  return (
    <Item sm={sm}>
      {!!to && (
        <>
          {to.indexOf("/") === 0 ? (
            <Link to={to}>{textComponent}</Link>
          ) : (
            <a href={to}>{textComponent}</a>
          )}
        </>
      )}
      {!to && <>{textComponent}</>}
    </Item>
  );
};
