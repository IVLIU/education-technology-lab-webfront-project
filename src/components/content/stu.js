import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Notification from '../../pages/notification';
import Profile from '../../pages/profile';

export default props => {
    const { match } = props;
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={Notification} />
            <Route path={`${match.url}/profile`} component={Profile} />
        </Switch>
    );
}