import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumb } from '../src/components/Breadcrumb/Breadcrumb';
import '../src/components/tailwind.css';
import { BreadcrumbProps } from '../src/components/types';
import { HomeIcon, ReactIcon } from '../src/components/helper/Icons';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BreadcrumbProps> = (args) => (
  <>
    <Breadcrumb {...args} />
  </>
);

export const Default = Template.bind({});
export const WithIcon = Template.bind({});
export const CustomSeprator = Template.bind({});
export const CustomItem = Template.bind({});

Default.args = {
  items: [
    {
      name: 'JenikaUi',
      href: '/',
    },
    {
      name: 'Components',
      href: '/',
    },
    {
      name: 'Breadcrumb',
      href: '/?path=/story/components-breadcrumb--default',
    },
  ],
};
WithIcon.args = {
  items: [
    {
      icon: <HomeIcon className="jui-w-5 jui-h-5" />,
      name: 'JenikaUi',
      href: '/',
    },
    {
      icon: <ReactIcon className="jui-w-5 jui-h-5" />,
      name: 'Components',
      href: '/',
    },
    {
      name: 'Breadcrumb',
      href: '/?path=/story/components-breadcrumb--with-icon',
    },
  ],
};
CustomSeprator.args = {
  seprator: '/',
  items: [
    {
      icon: <HomeIcon className="jui-w-5 jui-h-5" />,
      name: 'JenikaUi',
      href: '/',
    },
    {
      name: 'Components',
      href: '/',
    },
    {
      name: 'Breadcrumb',
      href: '/?path=/story/components-breadcrumb--custom-seprator',
    },
  ],
};
CustomItem.args = {
  seprator: '/',
  items: [
    {
      icon: <HomeIcon className="jui-w-5 jui-h-5" />,
      link: <a href="/">Home</a>,
    },
    {
      link: <a href="/">Components</a>,
    },
    {
      link: (
        <a href="/?path=/story/components-breadcrumb--custom-item">
          Breadcrumb
        </a>
      ),
    },
  ],
};
