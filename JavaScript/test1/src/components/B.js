import React from 'react';

export default function B(props) {
    return (
        <button onClick={props.loadData}>{props.btnText}</button>
    )
}