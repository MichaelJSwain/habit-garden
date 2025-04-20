import './CheckinHeatmap.css';

export const CheckinHeatmap = ({history}) => {
    return (
    <div className="check-in-heatmap">
        
        {Array.from(Array(30).keys()).map((item, idx) => {
            return <div key={idx} className={(history.some(item => item === `2025-04-${idx + 1}`) )? "heatmap-table-cell active" : "heatmap-table-cell"}></div>
        })}
    </div>
    )
}