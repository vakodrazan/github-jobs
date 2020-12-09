import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/GlobalContext';
import JobFullTimeFilter from './JobFullTimeFilter'
import JobLocationFIlter from './JobLocationFIlter'

function JobFilter() {
    const { dispatch } = useContext(GlobalContext);

    const [location, setLocation] = useState("");

    const url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python"
    async function getJobsLocation(location, full_time) {
        const res = await fetch(`${url}&location=${location}&full_time=${full_time ? "on" : ""}`)
        const data = await res.json();
        dispatch({ type: "JOBS_FILTER", data })
    }

    useEffect(() => {
        getJobsLocation(location)
    }, [])

    function handLocation(e) {
        // If it checked, run the new array
        if (e.target.checked) {
            setLocation(e.target.name)
            getJobsLocation(location);
        }
    }

    return (
        <div>
            <JobFullTimeFilter />
            <JobLocationFIlter location={location} setLocation={setLocation} />

            <div>
                <div>
                    <input onChange={handLocation} name="london" type="checkbox" id="london" />
                    <label htmlFor="london">Lodon</label>
                </div>
                <div>
                    <input onChange={handLocation} name="amsterdam" type="checkbox" id="amsterdam" />
                    <label htmlFor="amsterdam">Amsterdam</label>
                </div>
                <div>
                    <input onChange={handLocation} name="new york" type="checkbox" id="new-york" />
                    <label htmlFor="new-york">New York</label>
                </div>
                <div>
                    <input onChange={handLocation} name="berlin" type="checkbox" id="berlin" />
                    <label htmlFor="berlin">Berlin</label>
                </div>
            </div>
        </div>
    )
}

export default JobFilter
