import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Layout from './components/Layout';
import Create from './components/Create';
import Shred from './components/Shred';

function getRoute() {
  switch (true) {
    case location.pathname === '/':
      return <Create />;
    case /^\/([a-z0-9])+$/gi.test(location.pathname): {
      const [id] = location.pathname.match(/^\/([a-z0-9])+$/gi);
      return <Shred id={id} />;
    }
  }
  location.pathname = '/';
}

const mountNode = document.getElementById('app');
ReactDOM.render(<Layout>{getRoute()}</Layout>, mountNode);
