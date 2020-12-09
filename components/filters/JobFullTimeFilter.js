import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/GlobalContext';

function JobFullTimeFilter() {
    const { state, dispatch } = useContext(GlobalContext)
    const { githubJobs } = state;
    const [fullTime, setFullTime] = useState(false);

    function handleCheckbox(e) {
        setFullTime(prevTime => !prevTime);
        if (fullTime) {
            const updatedJob = githubJobs.filter(job => job.type.toLowerCase() === e.target.name.toLowerCase());
            dispatch({ type: "ALL_FULL_TIME_JOBS", githubJobs: updatedJob})
        }
    }

    return (
        <div>
            <input 
                type="checkbox" 
                id="full-time" 
                name="Full Time"
                onChange={handleCheckbox}
            />
            <label htmlFor="full-time">Full time</label>
        </div>
    )
}

export default JobFullTimeFilter
