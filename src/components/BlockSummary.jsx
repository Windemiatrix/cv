import React from 'react';
import Title from "./Block/Title";
import Description from "./Block/Description";

const BlockSummary = (props) => {
    return (
        <div>
            <Title content={props.title}/>
            {props.description.map((item, index) => (
                <Description content={item}/>
            ))}
        </div>
    );
};

export default BlockSummary;