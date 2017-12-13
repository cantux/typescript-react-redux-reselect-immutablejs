import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './modules/app/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
