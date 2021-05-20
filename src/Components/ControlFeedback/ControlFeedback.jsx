import React from 'react';
import PropTypes from 'prop-types'

import s from './ControlFeedback.module.css'

const ControlFeedback = ({ myClick, name }) => {
    return (
        <li className={s.li}>
            <button onClick={myClick}>{name}</button>
        </li>
    )
}

ControlFeedback.propTypes = {
    myClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default ControlFeedback;