import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Propertys from './pages/Propertys/propertys';
import Login from './pages/Login/login';
import NewProperty from './pages/NewProperty/newProperty';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/property" exact component={Propertys}/>
                <Route path="/new" exact component={NewProperty}/>
            </Switch>
        </BrowserRouter>
    );
}