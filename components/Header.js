import React from 'react'

function Header() {
    return (
        <header>
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
