import React from 'react';
import './user.css';

const Userinfo = (props) => {
    return(
        <div className="user_class">
            <img className="user_image" src={props.myuser.thumbnailUrl} alt="User Info"/> <div className="username_class"><a href="https://cocacola.com">{props.myuser.username}</a></div>
        </div>
    )
}

export default Userinfo;