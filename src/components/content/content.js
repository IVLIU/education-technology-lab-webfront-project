import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import Stu from './stu';
import Teach from './teach';
import Admin from './admin';

export default props => {
    return (
        <div>
            <Switch>
                <Redirect from='/login' to={`/${props.role}`} />
                <Route path="/admin" component={Admin}/>
                <Route path="/teach" component={Teach} />
                <Route path="/stu" component={Stu} />
            </Switch>
        </div>
    );
};


