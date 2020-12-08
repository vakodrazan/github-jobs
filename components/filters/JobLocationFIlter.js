import React from 'react'
import styled from 'styled-components'


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

function JobLocationFIlter() {
    function name(params) {
        
    }

    return (
        <SearchLocationStyle>
            <label htmlFor="location">Location</label>
            <div>
                <input 
                    type="text" id="location" 
                    placeholder="City, state, zip code or country" 
                />
            </div>
        </SearchLocationStyle>
    )
}

export default JobLocationFIlter
