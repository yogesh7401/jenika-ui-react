import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert } from '../src/components/Alert/Alert';
import '../src/components/tailwind.css';
import { AlertProps } from '../src/components/types';
import { ArrowIcon } from '../src/components/helper/Icons';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
export const CustomIcon = Template.bind({});
export const WithoutIcon = Template.bind({});
export const WithHTMLTag = Template.bind({});
export const NotClosable = Template.bind({});
export const WithoutTitle = Template.bind({});
export const FullBordered = Template.bind({});

Default.args = {
  title: 'Info',
  message: 'Information alert is displayed',
};
CustomIcon.args = {
  title: 'Custom alert',
  message: 'Custom alert with arrow icon',
  icon: <ArrowIcon />,
};
WithoutIcon.args = {
  title: 'Success',
  message: 'Successfully displayed alert message',
  type: 'success',
  showIcon: false,
};
NotClosable.args = {
  title: 'Danger',
  message: "This alert message can't be closed",
  type: 'danger',
  closable: false,
};
WithoutTitle.args = {
  message: 'Alert Message without title',
};
WithHTMLTag.args = {
  title: 'With HTML Tag',
  message: (
    <p>
      Alert message with{' '}
      <a
        className="jui-text-blue-400"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      >
        HTML
      </a>{' '}
      tag
    </p>
  ),
  type: 'warning',
};
FullBordered.args = {
  title: 'Full border alert message',
  message: 'Successfully displayed alert message with full border',
  type: 'success',
  borderPosition: 'full',
  showIcon: false,
};
