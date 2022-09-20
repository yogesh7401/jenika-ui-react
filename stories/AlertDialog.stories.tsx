import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AlertDialog } from '../src/components/AlertDialog/AlertDialog';
import '../src/components/tailwind.css';
import { AlertDialogProps } from '../src/components/types';
import { ArrowIcon } from '../src/components/helper/Icons';
import { Button } from '../src/components/Button/Button';

const meta: Meta = {
  title: 'Components/Alert Dialog',
  component: AlertDialog,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AlertDialogProps> = (args) => (
  <AlertDialog className="min-h-screen" {...args} />
);

export const Default = Template.bind({});
export const CustomIcon = Template.bind({});
export const CustomWidth = Template.bind({});
export const WithoutIcon = Template.bind({});
export const NotClosable = Template.bind({});
export const WithoutTitle = Template.bind({});
export const CustomMessage = Template.bind({});
export const FullBordered = Template.bind({});

Default.args = {
  title: 'Success',
  message: 'Successfully displayed alert message',
};
CustomWidth.args = {
  title: 'Success',
  message: 'Successfully displayed alert message with 900px width',
  type: 'success',
  width: '900px',
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
CustomMessage.args = {
  title: 'With HTML Tag',
  showConfirmBtn: false,
  showCancelBtn: false,
  message: (
    <div>
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
      <div className="jui-flex jui-mt-5 jui-px-3 jui-w-full jui-justify-between">
        <Button
          text={'Accept'}
          className="jui-mx-auto"
          variant={'warning'}
          type={'outlined'}
          onClick={() => null}
        />
      </div>
    </div>
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
