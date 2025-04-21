import { useState } from 'react';
import './CheckinHeatmap.css';

export const CheckinHeatmap = ({history}) => {
    const [daysInMonth, setDaysInMonth] = useState(Array.from(Array(30).keys()));

    return (
    <div className="check-in-heatmap">
        {daysInMonth.map((day, idx) => {
            return <div key={idx} className={(history.some(item => item === `2025-04-${idx + 1}`) )? "heatmap-table-cell active" : "heatmap-table-cell"}></div>
        })}
    </div>
    )
}