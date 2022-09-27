import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Breadcrumb } from '../stories/Breadcrumb.stories';

describe('Breadcrumb Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
