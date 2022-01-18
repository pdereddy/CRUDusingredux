import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <div>
                <nav className="navbar bg-dark justify-content-center">
                    <li className='nav-link'>
                        <NavLink to='/' className='nav-link' activeClassName="btn btn-primary">Home</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink to='/users' className='nav-link' activeclassname="btn btn-primary">Users</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink to='/adduser' className='nav-link' activeclassname="btn btn-primary">Add  User</NavLink>
                    </li>
                </nav>
            </div>
            <div style={{
                margin: 'auto',
                textAlign: 'center',
                width: '50%',
                border: '3px solid green',
                padding: '10px',
                marginTop: '2%'
            }}>
                <h1>Welcome To Users Information Portal</h1>
            </div>
        </div>

    );
}

export default Home;