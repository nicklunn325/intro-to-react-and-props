import React from 'react';

const Link = (props) => {
    return (
        <li><a href={props.href}> {props.href}</a></li>
        
    )
}

export default Link;