import React from 'react';
import Header from './masthead/Header';
import Jobs from "../pages/Jobs";
import JobFilter from './filters/JobFilter';
import styled from 'styled-components';

const JobContentStyle = styled.div`

    @media (min-width: 1140px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
    }

`;

function Home() {
    return (
        <main>
            <Header />
            <JobContentStyle>
                <JobFilter />
                <Jobs />
            </JobContentStyle>
        </main>
    )
}

export default Home
