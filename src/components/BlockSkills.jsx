import React from 'react';
import Title from "./Block/Title";

const BlockSkills = (props) => {
    return (
        <div>
            <Title content={props.title}/>
            {props.content.map((item, index) => (
                <div style={{margin: "10px 0px"}}>{item}</div>
            ))}
        </div>
    );
};

export default BlockSkills;