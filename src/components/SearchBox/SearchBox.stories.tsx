import { Story } from "@storybook/react";
import { SearchBox, SearchBoxProps } from "./SearchBox";

export default {
  title: "Molecules/SearchBox",
  component: SearchBox,
};

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: "Search for some things...",
  value: "Test",
};
