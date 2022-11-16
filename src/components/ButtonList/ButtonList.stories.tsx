import { Story } from "@storybook/react";
import { ButtonList, ButtonListProps } from "./ButtonList";

export default {
  title: "Molecules/ButtonList",
  component: ButtonList,
};

const Template: Story<ButtonListProps> = (args) => <ButtonList {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      __typename: "ButtonLinkRecord",
      id: "1",
      label: "Create a design",
      variant: "primary",
      to: "/",
    },
    {
      __typename: "ButtonLinkRecord",
      id: "2",
      label: "See all features",
      variant: "secondary",
      to: "/",
    },
  ],
};
