import { Story } from "@storybook/react";
import { GridColumn } from "./GridColumn";

export default {
  title: "Atoms/GridColumn",
  component: GridColumn,
};

const Template: Story = (args) => <GridColumn {...args} />;
export const Default = Template.bind({});
Default.args = {
  xs: "50%",
  children: <div style={{ border: "1px solid red" }}>grid column</div>,
};
