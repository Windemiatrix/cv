import React from 'react';

const BlockContacts = (props) => {
    return (
        <div>
            <div>
                <strong>{props.placement}</strong>
            </div>
            <div>
                Phone: <a href={"tel:" + props.phone}>{props.phone}</a>
            </div>
            <div>
                Email: <a href={"mailto:" + props.email}>{props.email}</a>
            </div>
            <div>
                Telegram: <a href={"https://t.me/" + props.telegram}>@{props.telegram}</a>
            </div>
        </div>
    );
};

export default BlockContacts;