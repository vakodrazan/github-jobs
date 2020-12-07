import React from 'react'
import styled from 'styled-components'

const JobDetailStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;

    img {
        width: 90px;
        border-radius: 4px;
    }
`;

function Jobdetails({ job }) {
    return (
        <JobDetailStyle>
            <h2>
                <img src={job.company_logo} alt={`${job.title} at ${job.company}`} />
            </h2>
            <div>
                <span>{job.company}</span>
                <p>{job.title}</p>
                <span>{job.type}</span>
            </div>
        </JobDetailStyle>
    )
}

export default Jobdetails
