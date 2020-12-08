import React from 'react';
import Header from './masthead/Header';
import Jobs from "../pages/Jobs";
import JobFilter from './filters/JobFilter';

function Home() {
    return (
        <main>
            <Header />
            <div>
                <JobFilter />
                <Jobs />
            </div>
        </main>
    )
}

export default Home
