import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const JobListStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;

    img {
        width: 90px;
        height: 90px;
        border-radius: 4px;
        background-color: #F2F2F2;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F2F2F2;
        border-radius: 4px;
        width: 90px;
        height: 90px;
        font-weight: 500;
        font-size: 12px;
        color: #BDBDBD;
    }

    .job-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
        font-weight: 500;
        font-size: 12px;
        color: #B9BDCF;

        .job-location {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        @media (min-width: 1140px) {
            gap: 20px;
        }
    }
`;

function JobLists({ job }) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const today = new Date().toLocaleString("en-US", options);
    const createdAt = new Date(job.created_at).toLocaleString("en-US", options);
    const totalDate = new Date(today) - new Date(createdAt)
    const daysAgo = Math.floor( totalDate / (1000 * 3600 * 24));

    return (
        <Link to={`/job/${job.id}`}>
            <JobListStyle>
                <h2>
                    {job.company_logo === null 
                        ? <div className="logo">Not found</div> 
                        : <img src={job.company_logo} alt={`${job.title} at ${job.company}`} />
                    }
                </h2>
                <div>
                    <span>{job.company}</span>
                    <p>{job.title}</p>
                    <span>{job.type}</span>

                    <footer className="job-footer">
                        <div className="job-location">
                            <span>{job.location}</span>
                        </div>
                        <div>
                            <time dateTime={job.created_at}>{daysAgo} {daysAgo > 1 ? "days" : "day"}</time>
                        </div>
                    </footer>
                </div>
            </JobListStyle>
        </Link>
    )
}

export default JobLists
