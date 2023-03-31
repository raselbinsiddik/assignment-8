import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Contact</a></li>
                       <li><a>About</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;