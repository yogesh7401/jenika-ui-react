// component.tsx
exports.component = (name) => `import React, { FC } from 'react';
import { ${name}Props } from '../types';

export const ${name}: FC<${name}Props> = (props) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};

`;

// component.stories.jsx
exports.story = (name) => `import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ${name} } from '../src/components/${name}/${name}';
import '../src/components/tailwind.css';
import { ${name}Props } from '../src/components/types';

const meta: Meta = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<${name}Props> = (args) => (
  <>
    <${name} {...args} />
  </>
);

export const Default = Template.bind({});
`;

// component.test.tsx
exports.test = (name) => `import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ${name} } from '../stories/${name}.stories';

describe('${name} Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<${name} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
`;
// index.tsx
exports.barrel = (name) => `\nexport * from './${name}/${name}';`;
