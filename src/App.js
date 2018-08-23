import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Router';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
