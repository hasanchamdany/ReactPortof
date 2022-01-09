import React, {useState} from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState('About')

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            
            <div className="navbar__items">
                {active !== 'About' && 
                    <Link to="/">
                        <div className="navbar__item" onClick={() =>setActive('About')}>About</div>
                    </Link>
                }
                {active !== 'Tech Stack' ? 
                    <Link to="/TechStack">
                        <div className="navbar__item" onClick={() =>setActive('Tech Stack')}>Tech Stack</div>
                    </Link>
                : null }
                
                
            </div>
        </div>
    );
};

export default Navbar;