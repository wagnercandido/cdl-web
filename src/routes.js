import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Info from './components/Info';
import Inscricao from './components/Inscricao';
import Confirmacao from './components/Confirmacao';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Info} />
            <Route path="/inscricao" exact component={Inscricao} />
            <Route path="/confirmacao/:id" exact component={Confirmacao} />
        </Switch>
    </BrowserRouter>
);

export default Routes;