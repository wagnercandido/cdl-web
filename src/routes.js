import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Info from './components/Info';
import Inscricao from './components/Inscricao';
import Confirmacao from './components/Confirmacao';
import Login from './components/Login';
import Painel from './components/Painel';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (localStorage.getItem('data_id') && localStorage.getItem('data'))
            ? <Component {...props} /> : <Redirect to='/entrar' />
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Info} />
            <Route path="/inscricao" exact component={Inscricao} />
            <Route path="/confirmacao/:id" exact component={Confirmacao} />
            <Route path="/entrar" component={Login} />
            <PrivateRoute path="/painel" component={Painel} />
        </Switch>
    </BrowserRouter>
);

export default Routes;