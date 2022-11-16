import { Button, Paper, styled, Typography } from "@mui/material";
import React, { FC, memo, ReactNode } from "react";
import PadlockIcon from "@mui/icons-material/Https";

export type CartSummaryProps = {
  subtotalText: ReactNode;
  subtotalValue: ReactNode;
  deliveryText: ReactNode;
  deliveryValue: ReactNode;
  afterText: ReactNode;
  buttonText: ReactNode;
  disabled?: boolean;

  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.colors.greenLight,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}));

const DeliveryText = styled(Typography)(({ theme }) => ({
  color: theme.colors.greyDark,
  fontSize: "1.4rem",
  textAlign: "center",
}));

const CartSummary: FC<CartSummaryProps> = (props: CartSummaryProps) => {
  return (
    <Container sx={{}}>
      <Typography textAlign="center" sx={{ fontSize: "1.4rem" }}>
        {props.subtotalText}: {props.subtotalValue}
      </Typography>
      <DeliveryText textAlign="center">
        {props.deliveryText}: {props.deliveryValue}
      </DeliveryText>
      <Button
        disabled={props.disabled}
        fullWidth
        variant="contained"
        color="primary"
        endIcon={<PadlockIcon />}
        sx={{
          fontSize: "1.25rem",
          marginTop: 1.25,
          marginBottom: 1,
          paddingTop: 2,
          paddingBottom: 2,
        }}
        onClick={props.onClick}
      >
        {props.buttonText}
      </Button>
      {props.afterText}
    </Container>
  );
};

export default memo(CartSummary);
