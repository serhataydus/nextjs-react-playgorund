import React from "react";
import { Story, Meta } from "@storybook/react/";
import EmptyBasicElement from "./EmptyBasicElement";
import { IEmptyBasicElementProps } from "./EmptyBasicElement.model";

export default {
  title: "Components/EmptyBasicElement",
  component: EmptyBasicElement,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<IEmptyBasicElementProps> = (args) => (
  <EmptyBasicElement {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "EmptyBasicElement Content",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
