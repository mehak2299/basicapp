import React from 'react'
import { Link } from 'react-router-dom'

export default function RoutesCheck() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                     <Link to='/'>Home</Link>
                    </li>
                    <li>
                     <Link to='/one'>One</Link>
                    </li>
                    <li>
                     <Link to='/two'>Two</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
