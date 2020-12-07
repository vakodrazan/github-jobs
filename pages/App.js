import React from 'react'
import Header from '../components/Header';
import JobFilter from '../components/JobFilter';

import Jobs from "./Jobs";

function App() { 
    return (
        <div>
            <Header />
            <div>
                <JobFilter />
                <Jobs />
            </div>
        </div>
    )
}

export default App
