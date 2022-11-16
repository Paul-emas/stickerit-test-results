import { Story } from "@storybook/react";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink";

export default {
  title: "Atoms/ButtonLink",
  component: ButtonLink,
};

const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

export const InternalLink = Template.bind({});
InternalLink.args = {
  children: "Button link",
  color: "primary",
  variant: "contained",
  to: "/internal-url",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Full width button link",
  color: "primary",
  variant: "contained",
  displayWidth: "full width",
  to: "/internal-url",
};

export const Wider = Template.bind({});
Wider.args = {
  children: "Wider button link",
  color: "primary",
  variant: "contained",
  displayWidth: "wider",
  to: "/internal-url",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  children: "Button link",
  color: "primary",
  variant: "contained",
  to: "https://google.com",
  target: "_blank",
};
