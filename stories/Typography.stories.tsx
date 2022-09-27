import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from '../src/components/Typography/Typography';
import '../src/components/tailwind.css';
import { TypographyProps } from '../src/components/types';

const meta: Meta = {
  title: 'Components/Typography',
  component: Text,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => (
  <>
    <Text {...args} />
  </>
);

const HeadingTemplate: Story<TypographyProps> = (args) => (
  <div className="jui-space-y-3">
    <Text variant="h1" type="primary" children="Heading 1" {...args} />
    <Text variant="h2" type="secondary" children="Heading 2" {...args} />
    <Text variant="h3" type="success" children="Heading 3" {...args} />
    <Text variant="h4" type="warning" children="Heading 4" {...args} />
    <Text variant="h5" type="danger" children="Heading 5" {...args} />
    <Text variant="h6" type="info" children="Heading 6" {...args} />
  </div>
);

const TextAlignTemplate: Story<TypographyProps> = (args) => (
  <div className="jui-space-y-3">
    <Text variant="p" align="left" children="Left Align" {...args} />
    <Text variant="p" align="center" children="Center Align" {...args} />
    <Text variant="p" align="right" children="Right Align" {...args} />
    <Text variant="p" align="justify" children="Justify" {...args} />
  </div>
);

const DecorationTemplate: Story<TypographyProps> = (args) => (
  <div className="jui-space-y-3">
    <Text
      variant="p"
      decoration="underline"
      children="Underlined Text"
      {...args}
    />
    <Text variant="p" decoration="strike" children="Striked Text" {...args} />
    <Text
      variant="p"
      decoration="no-underline"
      children="Normal Text"
      {...args}
    />
  </div>
);

export const Default = Template.bind({});
export const Headings = HeadingTemplate.bind({});
export const TextAlign = TextAlignTemplate.bind({});
export const TextDecoration = DecorationTemplate.bind({});
export const LineClamp = Template.bind({});

Default.args = {
  children:
    'Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur sed dolorum perspiciatis quibusdam vero, amet iste rem magni. Accusantium neque fugit officia accusamus doloremque velit, rem et a nemo!',
};

LineClamp.args = {
  children:
    'Paragraph with line clamp 2 - Lorem ipsum dolor sit amet, id mei tale doctus, mea partem equidem cu, an pro quidam propriae. Alii cibo munere sea cu. Ex ius saepe fierent, an vim dicam blandit, quem dolore vix eu. Aperiri ponderum argumentum ad his. Option definiebas ei eam, mel summo prompta dolorum ex. Ex usu ferri ullamcorper, ei causae tincidunt sed, ei stet scriptorem quo.',
  lineClamp: '2',
};
