import React from 'react';
import s from './FeedbackCounter.module.css'

const FeedbackCounter = ({ good, bad, neutral }) => {
    let totalValue = good + neutral + bad;
        return(
            <>
                <span className={s.percentage}>Good: {good}</span>
                <span className={s.percentage}>Neutral: {neutral}</span>
                <span className={s.percentage}>Bad: {bad}</span>
                <span className={s.positivePercentage}>Positive percentage: {totalValue === 0 ? '0' : Math.round(good * 100 / totalValue)}</span>
            </>
        )
    
}

export default FeedbackCounter;









