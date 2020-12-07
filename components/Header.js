import React from 'react'

function Header() {
    return (
        <header>
            <h1>
                Github Jobs
            </h1>
            <div>
                <form>
                    <input type="text" placeholder="Title, companies, expertise or benefits" />
                    <button aria-label="search">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header
