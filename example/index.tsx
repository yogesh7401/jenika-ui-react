import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion, Alert, Button, AlertDialog } from '../.';
import './index.css';

const App = () => {
  return (
    <div>
      <Button variant="danger" text="button" className="accordion-desc" />
      <Accordion
        titleClassName="accordion-title"
        descClassName="accordion-desc"
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
      <Alert type="warning" onClose={() => null} />
      <AlertDialog
        title={'example'}
        message={'example alert message'}
        onConfirm={() => null}
        onCancel={() => null}
        onClose={() => null}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
