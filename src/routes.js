import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Propertys from './pages/Propertys/propertys';
import Login from './pages/Login/login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/property" exact component={Propertys}/>
            </Switch>
        </BrowserRouter>
    );
}