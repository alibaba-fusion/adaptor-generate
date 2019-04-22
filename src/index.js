import React from 'react';
import ReactDOM from 'react-dom';
import generate from './generate/pc';
import { initDemo } from './utils';
import generateApp from './layouts/GenerateApp';

export default (Adaptor, isDev = true) => {
  let App = generate(Adaptor);

  if (isDev) {
    App = generateApp(App);
  }

  window.renderDemo = function () {
    ReactDOM.render(<App />, document.getElementById('root'));
  };

  window.renderDemo('en-us');

  initDemo(Adaptor.name);
}
