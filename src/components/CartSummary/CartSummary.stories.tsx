import { Box, Typography } from "@mui/material";
import { Story } from "@storybook/react";
import { CurrencyWithPrice } from "../CurrencyWithPrice";
import CartSummary, { CartSummaryProps } from "./CartSummary";

export default {
  title: "Molecules/CartSummary",
  component: CartSummary,
};

const Template: Story<CartSummaryProps> = (args) => (
  <Box sx={{ maxWidth: "400px", padding: 2 }}>
    <CartSummary {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  subtotalText: "Subtotal",
  subtotalValue: (
    <CurrencyWithPrice price={123} currencyCode="GBP" locale="en-gb" />
  ),
  deliveryText: "Delivery",
  deliveryValue: (
    <CurrencyWithPrice price={8} currencyCode="USD" locale="en-us" />
  ),
  afterText: (
    <Typography textAlign="center">
      or <a href="#">continue shopping</a>
    </Typography>
  ),
  buttonText: "Checkout",
};
