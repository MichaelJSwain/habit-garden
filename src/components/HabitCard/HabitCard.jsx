import { getGrowthStage, getToday, checkInHabit } from '../../utils/habitUtils';
import './HabitCard.css';

export const HabitCard = ({habit, onUpdate}) => {

    const handleCheckIn = () => {
        const updatedHabit = checkInHabit(habit);
        onUpdate(updatedHabit);
    }

    return (
        <div className="card">
            <div className="card-img-container">
            <p>{getGrowthStage(habit.streak)}</p>
            </div>
            <div className="card-info-container">
                <h3>{habit.name}</h3>
                <div>
                    <p>Streak: {habit.streak} {habit.streak > 0 ? "🔥" : ""}</p>
                    
                </div>
            </div>
            <div style={{width: '100%', height:'40px', display: 'flex', alignItems: 'center'}}>
                <div className="card-button-container">
                    <button 
                        onClick={() => {handleCheckIn(habit);}}  
                        disabled={habit.lastCheckIn === getToday()}
                    >
                        {habit.lastCheckIn === getToday() ? "Checked In ✔" : "Mark as Done 💧"}
                    </button>
                </div>
            </div>
            
        </div>
    )
}