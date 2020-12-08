import React, { useState } from 'react'

function JobFullTimeFilter() {
    const [fullTime, setFullTime] = useState(false);

    return (
        <div>
            <input 
                type="checkbox" 
                id="full-time" 
                name="fullTime"
                checked={fullTime}
                onChange={() => setFullTime(prev => !prev)}
            />
            <label htmlFor="full-time">Full time</label>
        </div>
    )
}

export default JobFullTimeFilter
