import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/components/Button/Button';
import '../src/components/tailwind.css';
import { ButtonProps } from '../src/components/types';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args, args1) => (
  <>
    <Button {...args} />
  </>
);

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});
export const Disabled = Template.bind({});
export const Outlined = Template.bind({});

Default.args = {
  text: 'Default',
};

Primary.args = {
  text: 'Primary',
  variant: 'primary',
};

Secondary.args = {
  text: 'Secondary',
  variant: 'secondary',
};

Success.args = {
  text: 'Success',
  variant: 'success',
};

Warning.args = {
  text: 'Warning',
  variant: 'warning',
};

Info.args = {
  text: 'Info',
  variant: 'info',
};

Danger.args = {
  text: 'Danger',
  variant: 'danger',
};

Dark.args = {
  text: 'Dark',
  variant: 'dark',
};

Light.args = {
  text: 'Light',
  variant: 'light',
};

Disabled.args = {
  variant: 'warning',
  disable: true,
};

Outlined.args = {
  text: 'Outlined',
  variant: 'primary',
  type: 'outlined',
};
