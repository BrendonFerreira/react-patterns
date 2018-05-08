import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index.jsx'

import RenderCallback from './render-callback-component'
import Stateful from './stateful-component'
import Stateless from './stateless-component'
import Container from './container-component'
import HighOrder from './high-order-component'

ReactDOM.render(
  <Main components={ [ RenderCallback, Stateful, Stateless, Container, HighOrder ] } />,
  document.getElementById('root')
);
module.hot.accept();