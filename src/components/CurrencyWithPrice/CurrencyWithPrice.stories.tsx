import Typography from "@mui/material/Typography";
import { Meta, Story } from "@storybook/react";
import { CurrencyWithPrice, CurrencyWithPriceProps } from "./CurrencyWithPrice";

export default {
  title: "Atoms/CurrencyWithPrice",
  component: CurrencyWithPrice,
};

const Template: Story<CurrencyWithPriceProps> = (args) => (
  <Typography variant="h3">
    <CurrencyWithPrice {...args} />
    <br />
    <CurrencyWithPrice {...args} price={(args.price || 0) + 0.23} />
  </Typography>
);

export const GBP = Template.bind({});
GBP.args = {
  locale: "en-gb",
  currencyCode: "GBP",
  price: 750,
};

export const USD = Template.bind({});
USD.args = {
  locale: "en-us",
  currencyCode: "USD",
  price: 750,
};

export const INR = Template.bind({});
INR.args = {
  locale: "en-in",
  currencyCode: "INR",
  price: 10028,
};

export const CHF = Template.bind({});
CHF.args = {
  locale: "de-ch",
  currencyCode: "CHF",
  price: 123,
};

export const CHF_FRCH = Template.bind({});
CHF_FRCH.args = {
  locale: "fr-ch",
  currencyCode: "CHF",
  price: 123,
};

export const EUR = Template.bind({});
EUR.args = {
  locale: "de-de",
  currencyCode: "EUR",
  price: 750,
};
EUR.argTypes = {
  locale: { table: { disable: true } },
  currencyCode: { table: { disable: true } },
};

export const Scandinavian = Template.bind({});
Scandinavian.args = {
  locale: "sv-SE",
  currencyCode: "SEK",
  price: 75000000,
};
Scandinavian.argTypes = {
  locale: {
    options: ["sv-SE", "no", "da-dk"],
    control: { type: "select" },
  },
  currencyCode: {
    options: ["SEK", "NOK", "DKK"],
    control: { type: "select" },
  },
};
