import './HabitCard.css';

export const HabitCard = ({habit, onCheckIn}) => {
    return (
        <div className="card">
            <div className="card-img-container"></div>
            <div className="card-info-container">
                <h3>{habit.name}</h3>
                <div>
                    <p>Streak: {habit.streak}</p>
                    
                </div>
            </div>
            <div style={{width: '100%', height:'40px', display: 'flex', alignItems: 'center'}}>
                {habit.lastCheckIn === new Date().toISOString().split("T")[0] ? 
                <div style={{width: '100%'}}>Plant watered ✅</div> :
                <div className="card-button-container">
                    <button onClick={() => onCheckIn(habit)}>Water Plant</button>
                </div>}
            </div>
            
        </div>
    )
}