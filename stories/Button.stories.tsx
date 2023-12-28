import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../src/components/Button/Button';
import '../src/components/tailwind.css';
import { ButtonProps } from '../src/components/types';
import { SuccessIcon } from '../src/components/helper/Icons';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <>
    <Button {...args} />
  </>
);

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const WithIcon = Template.bind({});
export const CustomIcon = Template.bind({});
export const Disabled = Template.bind({});
export const Outlined = Template.bind({});

Default.args = {};

Primary.args = {
  text: 'Primary',
  variant: 'primary',
};

WithIcon.args = {
  text: 'Secondary',
  variant: 'secondary',
  showIcon: true,
};

CustomIcon.args = {
  text: 'Success',
  variant: 'success',
  showIcon: true,
  icon: <SuccessIcon />,
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
