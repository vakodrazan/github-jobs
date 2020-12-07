import React from 'react';
import Header from './Header';
import JobFilter from './JobFilter';
import Jobs from "../pages/Jobs";

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
