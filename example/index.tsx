import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JButton } from '../.';

const App = () => {
  return (
    <div>
      <JButton text='My Button' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
