import React from "react";
import { Story, Meta } from "@storybook/react/";
import <%=componentname%> from "./<%=componentname%>";
import { I<%=componentname%>Props } from "./<%=componentname%>.model";

export default {
  title: "Components/<%=componentname%>",
  component: <%=componentname%>,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<I<%=componentname%>Props> = (args) => (
  <<%=componentname%> {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "<%=componentname%> Content",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
