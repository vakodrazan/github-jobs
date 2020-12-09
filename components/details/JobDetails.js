import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { GlobalContext } from '../../pages/GlobalContext';

import "./jobdetails.scss";

function Jobdetails() {
    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;

    // Find the id of the clicked item
    const { jobId } = useParams();

    const findJob = githubJobs.find(job => job.id === jobId);

    // Convert the date into how many days from the moment
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const today = new Date().toLocaleString("en-US", options);
    const createdAt = new Date(findJob.created_at).toLocaleString("en-US", options);
    const totalDate = new Date(today) - new Date(createdAt)
    const daysAgo = Math.floor( totalDate / (1000 * 3600 * 24));

    // Use `dangerouslySetInnerHTML` to convert the html element in the string into an active element

    return (
        <article className="details">
            <div className="details-sidebar">
                <Link to="/" className="backToHomepage">
                    <i className="ri-arrow-left-line"></i>
                    Back to search
                </Link>
                <div>
                    <h3>How to Apply</h3>
                    <div 
                        dangerouslySetInnerHTML={{ __html: findJob.how_to_apply}}
                    >
                    </div>
                </div>
            </div>
            <section className="details-content">
                <header>
                    <h2>{findJob.title}</h2>
                    <span>{findJob.type}</span>
                </header>
                <time dateTime={findJob.created_at}>
                    <i className="ri-time-line"></i>
                    {daysAgo} {daysAgo > 1 ? "days" : "day"}
                </time>
                <div className="company-details">
                    {/* Prevent from a broken image link */}
                    {findJob.company_logo === null 
                        ? <div className="logo-not-found">Not found</div>
                        : <img className="logo" src={findJob.company_logo} alt={findJob.title, findJob.company} />
                    }
                    <div>
                        <h3>{findJob.company}</h3>
                        <div className="location">
                            <i className="ri-earth-line"></i>
                            <span>{findJob.location}</span>
                        </div>
                    </div>
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html: findJob.description }}
                ></div>
            </section>
        </article>
    )
}

export default Jobdetails
