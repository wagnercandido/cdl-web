import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inscricao from './components/Inscricao';
import Confirmacao from './components/Confirmacao';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Inscricao} />
            <Route path="/confirmacao/:id" component={Confirmacao} />
        </Switch>
    </BrowserRouter>
);

export default Routes;