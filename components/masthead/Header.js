import React from 'react'

import "./header.scss";

function Header() {
    return (
        <header className="masthead">
            <form className="search">
                <input type="text" placeholder="Title, companies, expertise or benefits" />
                <button aria-label="search">Search</button>
            </form>
        </header>
    )
}

export default Header
