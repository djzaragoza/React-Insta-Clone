import React from 'react';
import './postcontainer.css';
import Userinfo from './user/userinfo';
import Postcontent from './postcontent/postcontent';
import Useraction from './useractions/useraction';
import Messagesection from './messagesection/messagesection';
import Likes from './likes/likes';
import Post from './post/post';

const PostCont = (props) => {
    return (
        <div className="wrapper">
            <div className="post_container">
                <Userinfo myuser =  {props.mydata}/>
                <Postcontent mydata = {props.mydata} triggerlikes={props.triggerlikes}/>
                <Useraction triggerlikes={props.triggerlikes} mydata={props.mydata}/>
                <Likes likes_var = {props.mydata}/>
                    {props.mydata.comments.map((comments_map, j) => (
                        <Messagesection message = {comments_map} key={comments_map.com_id} />
                    ))}
                <Post postaction={props.postaction} postchange={props.postchange} mydata={props.mydata} post_comment={props.post_comment}/>
            </div>
        </div>
    )
}

export default PostCont;