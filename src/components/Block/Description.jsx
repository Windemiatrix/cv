import React from 'react';

const Description = (props) => {
    return (
        <div style={{margin: "10px 0px", textAlign: "justify"}}>
            {props.content}
        </div>
    );
};

export default Description;