import React, { useContext } from 'react'
import styled from 'styled-components';
import JobDetails from "../components/Jobdetails"
import { GlobalContext } from './GlobalContext';

const JobsStyle = styled.article`
    display: grid;
    gap: 20px;
    // grid-template-rows: 1fr 2fr;
`;

function Jobs() {
    const { state } = useContext(GlobalContext);
    const { githubJobs, loading } = state;

    return (
        <div>
            {loading && <p>Loading...</p>}
            <JobsStyle>
                {githubJobs.map(job => <JobDetails key={job.id} job={job} />)}
            </JobsStyle>
        </div>
    )
}

export default Jobs
