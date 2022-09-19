import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion } from '../src/components/Accordion/Accordion';
import '../src/components/tailwind.css';
import { AccordionProps } from '../src/components/types';
import { SuccessIcon } from '../src/components/helper/Icons';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
export const Collapse = Template.bind({});
export const WithoutIcon = Template.bind({});
export const RightIcon = Template.bind({});
export const CustomIcon = Template.bind({});
export const FadeAnimation = Template.bind({});

const data = [
  {
    title: 'Section 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore fugiat, consequatur accusantium quo nulla aliquid corrupti architecto quod aperiam unde, perspiciatis ut minima dolores quasi. Corporis alias vitae voluptatem!',
  },
  {
    title: 'Section 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore fugiat, consequatur accusantium quo nulla aliquid corrupti architecto quod aperiam unde, perspiciatis ut minima dolores quasi. Corporis alias vitae voluptatem!',
  },
  {
    title: 'Section 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore fugiat, consequatur accusantium quo nulla aliquid corrupti architecto quod aperiam unde, perspiciatis ut minima dolores quasi. Corporis alias vitae voluptatem!',
  },
];

Default.args = {
  data: data,
};

Collapse.args = {
  data: data,
  type: 'collapse',
};

WithoutIcon.args = {
  data: data,
  showIcon: false,
};

RightIcon.args = {
  data: data,
  iconPosition: 'right',
};

CustomIcon.args = {
  data: data,
  icon: <SuccessIcon />,
};

FadeAnimation.args = {
  data: data,
  fadeAnimation: true,
};
