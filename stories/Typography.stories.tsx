import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography } from '../src/components/Typography/Typography';
import '../src/components/tailwind.css';
import { TypographyProps } from '../src/components/types';

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => (
  <>
    <Typography {...args} />
  </>
);

export const Default = Template.bind({});
