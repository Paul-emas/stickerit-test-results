import { Story } from "@storybook/react";
import { GridColumn } from "../GridColumn";
import { Grid } from "./Grid";

export default {
  title: "Atoms/Grid",
  component: Grid,
};

const Template: Story = (args) => <Grid {...args} />;
export const Default = Template.bind({});
Default.args = {
  gap: "20px",
  children: (
    <>
      <GridColumn xs="50%" md="25%">
        col 1
      </GridColumn>
      <GridColumn xs="50%" md="25%">
        col 2
      </GridColumn>
    </>
  ),
};
