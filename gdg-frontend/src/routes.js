import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contacts';
import Videos from './pages/Videos';
import Video from './pages/Video';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/videos" component={Videos} />
                <Route path="/v/:videoId" component={Video} />
            </Switch>
        </BrowserRouter>
    );
}