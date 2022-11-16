import React, { FC } from "react";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import { Variant } from "@mui/material/styles/createTypography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";
import { colors } from "../../theme";

export interface GreenTicksListItemProps extends ListItemProps {
  variant?: Variant;
}

export const GreenTicksListItem: FC<GreenTicksListItemProps> = (props) => {
  return (
    <ListItem
      {...props}
      sx={{
        padding: 0,
      }}
    >
      <ListItemIcon sx={{ minWidth: 32 }}>
        <CheckIcon htmlColor={colors.greenDark} />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography variant={props.variant}>{props.children}</Typography>
        }
      />
    </ListItem>
  );
};
