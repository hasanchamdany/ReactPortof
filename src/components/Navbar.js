import React, {useState} from 'react';

const Navbar = () => {
    const [active, setActive] = useState('About')

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'About' && 
                    <div className="navbar__item" onClick={() =>setActive('About')}>About</div>
                }
                {active !== 'Tech Stack' ? 
                    <div className="navbar__item" onClick={() =>setActive('Tech Stack')}>Tech Stack</div>
                : null }
                
                
            </div>
        </div>
    );
};

export default Navbar;