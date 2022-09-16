import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as JButton } from '../stories/JButton.stories';

describe('JButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JButton text="JButton"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
