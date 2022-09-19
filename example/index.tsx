import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion, Alert, Button } from '../.';

const App = () => {
  return (
    <div>
      <Button variant="danger" text="button" />
      <Accordion
        data={[
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
        ]}
      />
      <Alert type="warning" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
