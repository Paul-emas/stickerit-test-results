import { IGatsbyImageData } from "gatsby-plugin-image";
import { StructuredTextGraphQlResponse } from "react-datocms";
import type { TypographyProps as MuiTypographyProps } from "@mui/material";
import React from "react";

export type TypographyProps = MuiTypographyProps & {
  component?: React.ElementType;
};

export type TitleComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type DisplayTitleAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2";

export interface IProofsProps {
  id: string;
  priority: number;
  status: string;
  taskName: string;
  customer: string;
  shipDate: string;
  designer: string;
  actions: string;
  orderNumber: string;
  storeName: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export interface IQARowProps {
  id: string;
  priority: number;
  status: string;
  designCode: string;
  customer: string;
  brand: string;
  material: string;
  quantity: number;
  shipping_deadline: string;
  actions: string;
}

export interface IManufacturingRows {
  id: string;
  priority: number;
  status: string;
  designCode: string;
  material: string;
  shipping_deadline: string;
  print_time: string;
  print_length: number;
  product: string;
  actions: string;
}

export type IOrderTableRows = IQARowProps | IProofsProps | IManufacturingRows;

export type BlockBase = {
  __typename: string;
  id: string;
};

export type StructuredTextRecord = BlockBase & {
  structuredText: StructuredTextGraphQlResponse;
};

export type InlineImage = {
  gatsbyImageData?: IGatsbyImageData;
  url?: string;
  alt: string;
  title: string;
};

export type InlineImageRecord = BlockBase & {
  image: InlineImage;
  maxWidth?: string;
  maxHeight?: string;
};

export type Material = {
  id: string;
  name?: string;
  description?: string;
  materialImage?: InlineImage;
  exampleProductImage?: InlineImage;
  highlights?: MaterialHighlight[];
  uses?: MaterialUse[];
  datasheetUrl?: string;
  buyButtonText?: string;
  datasheetButtonText?: string;
  buyButtonDestination: string;
  sku: string;
};

export type MaterialHighlight = {
  id: string;
  name: string;
};

export type MaterialUse = {
  id: string;
  name: string;
};

export type ButtonRecord = BlockBase & {
  label: string;
  variant: "primary" | "secondary";
};

export type ButtonLinkRecord = BlockBase & {
  label: string;
  variant: "primary" | "secondary";
  to: string;
  target?: string;
};

export type ButtonListRecord = BlockBase & {
  buttons: ButtonLinkRecord[];
};

export type Block = ButtonListRecord | StructuredTextRecord | InlineImageRecord;
