import { Story } from "@storybook/react";
import { WistiaVideo, WistiaVideoProps } from "./WistiaVideo";

export default {
  title: "Atoms/WistiaVideo",
  component: WistiaVideo,
};

const Template: Story<WistiaVideoProps> = (args) => <WistiaVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoId: "26sk4lmiix",
};
