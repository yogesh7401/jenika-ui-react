import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '../src/components/Badge/Badge';
import '../src/components/tailwind.css';
import { BadgeProps } from '../src/components/types';
import { SuccessIcon } from '../src/components/helper/Icons';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BadgeProps> = (args, args1) => (
  <>
    <Badge {...args} />
  </>
);

export const Default = Template.bind({});
export const Danger = Template.bind({});
export const WithIcon = Template.bind({});
export const CustomIcon = Template.bind({});
export const Outlined = Template.bind({});

Default.args = {};

Danger.args = {
  text: 'Danger',
  variant: 'danger',
  size: 'sm',
};

WithIcon.args = {
  text: 'With Icon',
  variant: 'info',
  showIcon: true,
};

CustomIcon.args = {
  text: 'Success Icon',
  showIcon: true,
  icon: <SuccessIcon />,
};

Outlined.args = {
  text: 'Outlined',
  variant: 'primary',
  type: 'outlined',
};
