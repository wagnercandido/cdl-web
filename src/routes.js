import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inscricao from './components/Inscricao';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Inscricao} />
        </Switch>
    </BrowserRouter>
);

export default Routes;