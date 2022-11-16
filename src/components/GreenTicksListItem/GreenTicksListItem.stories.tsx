import { Story } from "@storybook/react";
import {
  GreenTicksListItem,
  GreenTicksListItemProps,
} from "./GreenTicksListItem";

const Template: Story<GreenTicksListItemProps> = (args) => (
  <GreenTicksListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "List item 1",
};

export default {
  title: "Atoms/GreenTicksListItem",
  component: GreenTicksListItem,
};
