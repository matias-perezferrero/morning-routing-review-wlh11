import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    console.log("Header:", props)
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/one"><button>Route One</button></Link>
            <Link to="/one/two"><button>Route Two</button></Link>
        </div>
    )
}

export default Header