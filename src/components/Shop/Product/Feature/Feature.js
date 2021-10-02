import React from 'react';

const Feature = (props) => {
    console.log(props)
    const {feature} = props
    return (
        <div>
            <ul>
                <li>
                   <small> {feature.description}: <span style={{fontWeight: 'bold'}}>{feature.value}</span></small>
                </li>
            </ul>
        </div>
    );
};

export default Feature;