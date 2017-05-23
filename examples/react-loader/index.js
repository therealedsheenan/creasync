import React from 'react';
import { render } from 'react-dom';

import creasync from '../../lib/creasync';

const AsyncComponent = creasync({
  component: System.import('./TobeAsyncComponent.js'),
  error: () => (<div>error...</div>),
  loading: () => (<div>loading...</div>)
})

render(
  <AsyncComponent />,
  document.getElementById('root')
);
