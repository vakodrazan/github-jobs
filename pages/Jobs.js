import React, { useContext } from 'react'
import JobDetails from "../components/Jobdetails"
import { GlobalContext } from './GlobalContext';

function Jobs() {
    const { state } = useContext(GlobalContext);
    const { githubJobs, loading } = state;

    return (
        <div>
            {loading && <p>Loading...</p>}
            {githubJobs.map(job => <JobDetails key={job.id} job={job} />)}
        </div>
    )
}

export default Jobs
