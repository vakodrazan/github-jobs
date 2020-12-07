import React, { useContext } from 'react'
import Jobs from '../components/jobs';
import { GlobalContext } from './GlobalContext';

function App() {
    const { state } = useContext(GlobalContext);
    const { githubJobs, loading } = state
    console.log(githubJobs);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {githubJobs.map(job => <Jobs key={job.id} job={job} />)}
        </div>
    )
}

export default App
