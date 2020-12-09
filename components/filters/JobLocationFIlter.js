import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../pages/GlobalContext';


const SearchLocationStyle = styled.div`
    display: grid;
    gap: 14px;

    input {
        height: 32px;
        width: 80%;
        background-color: #fff;
        padding: 5px;
        border: none;
    }
`;

function JobLocationFIlter({ location, setLocation}) { 
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    function handleLocation(e) {
        const newJobs = githubJobs.filter(job => job.location.toLowerCase().includes(location));
        if (e.key === 'Enter') {
            dispatch({ type: "SEARCH_BY_LOCATION", newJobs})
        }
    }
    return (
        <SearchLocationStyle>
            <label htmlFor="location">Location</label>
            <div>
                <input 
                    type="text" id="location" 
                    placeholder="City, state, zip code or country" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={handleLocation}
                />
            </div>
        </SearchLocationStyle>
    )
}

export default JobLocationFIlter
