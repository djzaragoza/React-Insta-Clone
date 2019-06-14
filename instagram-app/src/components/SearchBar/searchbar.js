import React from 'react';
import './searchbar.css';
import logo from './logo.png';
import user from './instuser.png';
import logotext from './logotext.png';
import hearticon from './Instagram-Heart.png';
import explore from './explore.png';

const BarSearch = props => {
    return (
        <div className="my_bar">
            <div className="search_bar_container">
                <div className="logos">
                    <img className="logo" src={logo} alt="Instagram"/><div className="vertical_div"></div><div className="logotext" src={logotext} alt="Instagram"/>
                </div>
                <div className="serach_input_div">
                    <input className="search" type="text" placeholder="&#xF002; Search"></input>
                </div>
                <div className="account_logos">
                    <img className="logo" src={explore} alt="Explore"/>
                    <img className="logo" src={hearticon} alt=""/>
                    <img className="logo" src={user} alt="User Account"/>
                </div>
            </div>
        </div>
    )
}

export default BarSearch;