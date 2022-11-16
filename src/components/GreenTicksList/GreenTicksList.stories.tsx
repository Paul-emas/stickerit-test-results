import { Story } from "@storybook/react";
import { GreenTicksList, GreenTicksListProps } from "./GreenTicksList";

export default {
  title: "Molecules/GreenTicksList",
  component: GreenTicksList,
};

const Template: Story<GreenTicksListProps> = (args) => (
  <GreenTicksList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  listItems: ["List item 1", "List item 2", "List item 3"],
};
