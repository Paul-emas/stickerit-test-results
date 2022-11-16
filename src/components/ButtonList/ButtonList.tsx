import { Button, Grid } from "@mui/material";
import { FC } from "react";
import type { ButtonLinkRecord } from "../../types";
import { ButtonLink } from "../ButtonLink";

export type ButtonListProps = {
  buttons: ButtonLinkRecord[];
};

export const ButtonList: FC<ButtonListProps> = ({ buttons }) => {
  return (
    <Grid container spacing={1}>
      {buttons.map((button) => (
        <Grid item key={button.id} xs={12} md={buttons.length === 1 ? 12 : 6}>
          <ButtonLink
            variant={button.variant === "primary" ? "contained" : "outlined"}
            color="primary"
            fullWidth
            to={button.to}
            target={button.target}
            sx={
              button.variant === "secondary"
                ? {
                    background: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      background: "rgba(255,255,255,1)",
                    },
                  }
                : {}
            }
          >
            {button.label}
          </ButtonLink>
        </Grid>
      ))}
    </Grid>
  );
};
