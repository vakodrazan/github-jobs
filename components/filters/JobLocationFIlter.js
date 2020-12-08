import React from 'react'

function JobLocationFIlter() {
    
    return (
        <div>
            <label htmlFor="location">Location</label>
            <div>
                <input 
                    type="text" id="location" 
                    placeholder="City, state, zip code or country" 
                />
            </div>
        </div>
    )
}

export default JobLocationFIlter
