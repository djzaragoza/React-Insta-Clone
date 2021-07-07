import React from 'react';
import './likes.css';

const Likes = (props) => {
    return(
        <div className="likes_class">
            <p className="p_class">{props.likes_var.likes}likes</p>
        </div>
    )
}

export default Likes;