import React from 'react';
import Link from 'next/link'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className='navbar-brand'>
                    Posts App
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link href="/">Posts</Link>
                        </li>
                        <li>
                            <a href="/drafts">Drafts</a>
                        </li>
                        <li>
                            <Link href="/create">Add Post</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <style jsx>{`
                    .navbar{
                        width:100%;
                        display:flex;
                        padding:10px;
                       
justify-content:space-between;
                        width:500px;
                        margin:0px auto;
                    }
                    .navbar-brand{
                        font-weight:bold;
                        padding-left:20px;
                        margin-top:14px;
                    }
                    .nav-links ul{
                        padding:0px;
                        list-style-type:none;
                        display:flex;
                    }
                    .nav-links ul li{
                        margin-right:15px;
                        margin-top:0px;
                        padding:0px;
                    }
                    `}</style>
        </div>
    );
}