import React, { FC, FunctionComponent } from "react";

export type CurrencyWithPriceProps = {
  locale: string;
  currencyCode: string;
  price: number | null;
  maximumFractionDigits?: number;
};

const currencies: Record<string, string> = {
  EUR: "€",
  GBP: "£",
  USD: "$",
};

export const CurrencyWithPrice: FC<CurrencyWithPriceProps> = (props) => {
  if (!props.price || !props.currencyCode || !props.locale) {
    return <span>-</span>;
  }

  try {
    const formatted = new Intl.NumberFormat(props.locale, {
      style: "currency",
      currency: props.currencyCode,
      maximumFractionDigits:
        props.maximumFractionDigits || props.price.toFixed(2).endsWith(".00")
          ? 0
          : 2,
    }).format(props.price);

    return <span>{formatted}</span>;
  } catch (err) {
    return (
      <span>
        {currencies[props.currencyCode] || ""}
        {props.price.toFixed(2)}
      </span>
    );
  }
};

export default CurrencyWithPrice;
