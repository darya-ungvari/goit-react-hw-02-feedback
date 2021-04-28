import React from 'react';
import s from './FeedbackCounter.module.css'
import NotificationMsg from '../Notification message/NotificationMsg'

const FeedbackCounter = ({ good, bad, neutral }) => {
    let totalValue = good + neutral + bad;
        return(
            <>
                {totalValue <= 0 ?
                <NotificationMsg ></NotificationMsg>
                :
                <>
                    <span className={s.percentage}>Good: {good}</span>
                    <span className={s.percentage}>Neutral: {neutral}</span>
                    <span className={s.percentage}>Bad: {bad}</span>
                    <span className={s.positivePercentage}>Positive percentage: {Math.round(good * 100 / totalValue)}% </span>
                </>

                }
            </>
        )
    
}

export default FeedbackCounter;









