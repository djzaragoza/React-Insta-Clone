import React from 'react';
import './post.css';

const Post = (props) => {
    return(
        <div className="post_class">
            <input value = {props.post_comment} onChange = {props.postchange} className="post_input" type="text" placeholder=" Add a comment..."></input><button onClick={(e) => props.postaction(e, props.mydata.username)} className="post_button"type="submit" value="Post">Post</button>
        </div>
    )
}

export default Post;