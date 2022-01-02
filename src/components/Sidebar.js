import React from 'react'
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import github from "../assets/icons/github.svg"
import pin from "../assets/icons/pin.svg"
import tie from "../assets/icons/tie.svg"
import myavatar from "../assets/myavatar.svg"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={myavatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Hasan <span>Chamdany</span> </div>
            <div className="sidebar__item sidebar__title"> Web and Android Developer</div>
            <a href="!#">
                <div className="sidebar__item">
                    <img src={tie} alt="CV" className="sidebar__icon"/> Download CV
                </div>
            </a>
            <figure className="sidebar__social.icons">
                <a href="https://www.facebook.com/hasan.chamdani"><img src={facebook} alt="Facebook" className="sidebar__icon"/></a>
                <a href="https://www.instagram.com/hasan.chamdany/"><img src={instagram} alt="instagram" className="sidebar__icon"/></a>

            </figure>
            <div className="contact">
                <div className="sidebar__item">
                    <a href="https://github.com/hasanchamdany?tab=overview&from=2021-12-01&to=2021-12-31"><img src={github} alt="github" className="sidebar__icon"/>github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon"/>
                    Gresik, Indonesia</div>
                <div className="sidebar__item">hasanchamdany1@gmail.com</div>
                <div className="sidebar__item">081330666660</div>   
            </div>
        </div>
    )
}

export default Sidebar;