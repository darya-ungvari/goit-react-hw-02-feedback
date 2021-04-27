import React from 'react';

import s from './ControlFeedback.module.css'

const ControlFeedback = ({ myClick, name }) => {
    return(       
            <li className={s.li}>
                <button onClick={myClick}>{name}</button>
            </li>
    )
}

export default ControlFeedback;