import React from 'react'
import JobFullTimeFilter from './JobFullTimeFilter'

function JobFilter() {
    return (
        <div>
            <JobFullTimeFilter />

            <div>
                <label htmlFor="location">Location</label>
                <div>
                    <input type="text" id="location" placeholder="City, state, zip code or country" />
                </div>
            </div>

            <div>
                <div>
                    <input type="checkbox" id="london" />
                    <label htmlFor="london">Lodon</label>
                </div>
                <div>
                    <input type="checkbox" id="amsterdam" />
                    <label htmlFor="amsterdam">Amsterdam</label>
                </div>
                <div>
                    <input type="checkbox" id="new-york" />
                    <label htmlFor="new-york">New York</label>
                </div>
                <div>
                    <input type="checkbox" id="berlin" />
                    <label htmlFor="berlin">Berlin</label>
                </div>
            </div>
        </div>
    )
}

export default JobFilter
