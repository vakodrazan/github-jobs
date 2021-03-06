import React, { useContext } from 'react'
import styled from 'styled-components';
import JobDetails from "../components/JobLists"
import { GlobalContext } from './GlobalContext';

const JobsStyle = styled.article`
    display: grid;
    gap: 20px;
`;

function Jobs() {
    const { state } = useContext(GlobalContext);
    const { githubJobs, loading } = state;
    return (
        <div>
            {loading && <p>Loading...</p>}
            <JobsStyle>
                {githubJobs.length === 0 && !loading
                    ? <p>No results found</p>
                    : githubJobs.map(job => <JobDetails key={job.id} job={job} />)
                }
            </JobsStyle>
        </div>
    )
}

export default Jobs
