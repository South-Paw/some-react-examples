import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';
import { HOME_PATH, HELLO_PATH, COOKIES_PATH, FORM_PATH } from './paths';

const Home = Loadable({ loader: () => import('../Home'), loading: Loader });
const Hello = Loadable({ loader: () => import('../examples/Hello'), loading: Loader });
const Cookies = Loadable({ loader: () => import('../examples/Cookies'), loading: Loader });
const Form = Loadable({ loader: () => import('../examples/Form'), loading: Loader });

const Router = () => (
  <Switch>
    <Route exact path={HOME_PATH} component={Home} />
    <Route exact path={HELLO_PATH} component={Hello} />
    <Route exact path={COOKIES_PATH} component={Cookies} />
    <Route exact path={FORM_PATH} component={Form} />
  </Switch>
);

export default Router;
