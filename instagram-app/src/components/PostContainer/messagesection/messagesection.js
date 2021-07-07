import React from 'react';
import './messagesection.css';

const Messagesection = props => {
    return (
        <div className="messagesection_class">
            <div>
                <p className="user_name_class"><a href="https://cocacola.com">{props.message.username}</a><span style={{fontWeight:'200', marginleft:'7px'}}>{props.message.text}</span></p>
            </div>
        </div>
    )
}

export default Messagesection;