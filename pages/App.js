import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Jobdetails from '../components/details/JobDetails';

function App() { 
    return (
        <div>
            <header>
                <h1>
                    Github Jobs
                </h1>
            </header>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={`/job/:jobId`}>
                        <Jobdetails />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App
