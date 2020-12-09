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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

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
        time {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        @media (min-width: 1140px) {
            gap: 20px;
        }
    }

    &:hover {
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }
`;

function JobLists({ job }) {
    // Convert the date into a counter, count from how manyy days from now.
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const today = new Date().toLocaleString("en-US", options);
    const createdAt = new Date(job.created_at).toLocaleString("en-US", options);
    const totalDate = new Date(today) - new Date(createdAt)
    const daysAgo = Math.floor( totalDate / (1000 * 3600 * 24));

    return (
        <Link to={`/job/${job.id}`}>
            <JobListStyle>
                <h2>
                    {/* Prevent from a bad image or there is nothing */}
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
                            <i className="ri-earth-line"></i>
                            <span>{job.location}</span>
                        </div>
                        <div>
                            <time dateTime={job.created_at}>
                                <i className="ri-time-line"></i>
                                {daysAgo} {daysAgo > 1 ? "days" : "day"}
                            </time>
                        </div>
                    </footer>
                </div>
            </JobListStyle>
        </Link>
    )
}

export default JobLists
