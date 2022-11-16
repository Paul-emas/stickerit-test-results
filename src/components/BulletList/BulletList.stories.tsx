import { Story } from "@storybook/react";
import { BulletList, BulletListProps } from "./BulletList";

export default {
  title: "Molecules/BulletList",
  component: BulletList,
};

const Template: Story<BulletListProps> = (args) => <BulletList {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: "1",
      text: "bullet 1",
    },
    {
      id: "2",
      text: "bullet 2",
    },
    {
      id: "3",
      text: "bullet 3",
    },
  ],
};

export const Small = Template.bind({});
Small.args = {
  sm: true,
  items: [
    {
      id: "1",
      text: "bullet 1",
    },
    {
      id: "2",
      text: "bullet 2",
    },
    {
      id: "3",
      text: "bullet 3",
    },
  ],
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  items: [
    {
      id: "1",
      text: "bullet 1 - no link",
    },
    {
      id: "2",
      text: "bullet 2 - external link",
      to: "https://google.co.uk",
    },
    {
      id: "3",
      text: "bullet 3 - internal link",
      to: "/test",
    },
  ],
};
