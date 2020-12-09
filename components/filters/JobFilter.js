import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/GlobalContext';
import JobFullTimeFilter from './JobFullTimeFilter'
import JobLocationFIlter from './JobLocationFIlter'

function JobFilter() {
    const { dispatch } = useContext(GlobalContext);

    const [location, setLocation] = useState("");

    const cities = [
        {
            name: "Lodon",
            id: 1
        },
        {
            name: "Amsterdam",
            id: 2
        },
        {
            name: "New York",
            id: 3
        },
        {
            name: "Berlin",
            id: 4
        }
    ]

    const url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python"
    async function getJobsLocation(location, full_time) {
        const res = await fetch(`${url}&location=${location}&full_time=${full_time ? "on" : ""}`)
        const data = await res.json();
        dispatch({ type: "JOBS_FILTER", data })
    }

    useEffect(() => {
        getJobsLocation(location)
    }, [])

    function handLocation(e, city) {
        // If it checked, run the new array
        if (e.target.checked && city.id === e.target.id) {
            setLocation("");
        } else {
            setLocation(city.name);
            getJobsLocation(location);
        }
    }

    return (
        <div className="filters">
            <JobFullTimeFilter />
            <JobLocationFIlter location={location} setLocation={setLocation} />

            <div className="filter-city">
                {cities.map(city => (
                    <div key={city.id}>
                        <input onChange={(e) => handLocation(e, city)} name={city.name} type="checkbox" id={city.id} />
                        <label htmlFor={city.id}>{city.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobFilter
