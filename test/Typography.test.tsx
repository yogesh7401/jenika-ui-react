import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Typography } from '../stories/Typography.stories';

describe('Typography Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Typography />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
