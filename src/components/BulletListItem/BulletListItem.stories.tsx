import { Story } from "@storybook/react";
import { BulletListItem, BulletListItemProps } from "./BulletListItem";

export default {
  title: "Atoms/BulletListItem",
  component: BulletListItem,
};

const Template: Story<BulletListItemProps> = (args) => (
  <BulletListItem {...args} />
);
export const Default = Template.bind({});
Default.args = {
  text: "bullet 1",
};
export const Small = Template.bind({});
Small.args = {
  text: "bullet 1",
  sm: true,
};
export const WithExternalLink = Template.bind({});
WithExternalLink.args = {
  text: "bullet 1",
  to: "https://google.co.uk",
};
export const WithInternalLink = Template.bind({});
WithInternalLink.args = {
  text: "bullet 1",
  to: "/test",
};
