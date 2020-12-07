import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

function App() {
    const { state } = useContext(GlobalContext);
    const { githubJobs, loading } = state
    console.log(githubJobs);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {githubJobs.map(jobs => <p key={jobs.id}>{jobs.company}</p>)}
        </div>
    )
}

export default App
