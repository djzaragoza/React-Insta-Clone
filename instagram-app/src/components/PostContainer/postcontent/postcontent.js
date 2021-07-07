import React from 'react';
import './postcontent.css';
//import { userinfo } from 'os';

const Postcontent = props => {
    return (
        <div onDoubleClick={(e) => props.triggerlikes(e, props.mydata.username)} className="postcontent_class">
            <img className="content_image" src={props.mydata.imageUrl} alt=""/>
        </div>
    )
}

export default Postcontent;