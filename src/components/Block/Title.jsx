import React from 'react';

const Title = (props) => {
    return (
        <h2 style={{margin: "20px 0px"}} className={"text-uppercase h5 text-primary"}>
            {props.content}
        </h2>
    );
};

export default Title;