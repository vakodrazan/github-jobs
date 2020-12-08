import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../pages/GlobalContext';

import "./header.scss";

function Header() {
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    const [ searchForm, setSearchForm ] = useState("");

    function filterJobs(e) {
        e.preventDefault();
        const searchValue = searchForm.toLowerCase();
        const newUpdate = githubJobs.filter(jobs => 
            jobs.title.toLowerCase().includes(searchValue) 
            || jobs.company.toLowerCase().includes(searchValue)
        );

            dispatch({ type: "FILTER_BY_KEYWORDS", githubJobs: newUpdate })
    }

    return (
        <header className="masthead">
            <form className="search" onSubmit={filterJobs}>
                <input 
                    type="text" 
                    placeholder="Title, companies, expertise or benefits" 
                    value={searchForm}
                    onChange={(e) => setSearchForm(e.target.value)}
                />
                <button aria-label="search">Search</button>
            </form>
        </header>
    )
}

export default Header
