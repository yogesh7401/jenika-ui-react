import React from 'react';
import { Meta, Story } from '@storybook/react';
import { JButton } from '../src/components/JButton/JButton';
import "../src/components/tailwind.css"
import { JButtonProps } from "../src/components/types"

const meta: Meta = {
  title: 'Components/Button/JButton',
  component: JButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<JButtonProps> = args => <JButton {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});

Default.args = {
  text : "Default"
};

Primary.args = {
  text : "Primary",
  variant: "primary"
};

Secondary.args = {
  text : "Secondary",
  variant: "secondary"
};

Success.args = {
  text : "Success",
  variant: "success"
};

Warning.args = {
  text : "Warning",
  variant: "warning"
};

Info.args = {
  text : "Info",
  variant: "info"
};

Danger.args = {
  text : "Danger",
  variant: "danger"
};

Dark.args = {
  text : "Dark",
  variant: "dark"
};

Light.args = {
  text : "Light",
  variant: "light"
};