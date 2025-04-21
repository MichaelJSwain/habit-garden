import { useNavigate } from 'react-router-dom';
import { getGrowthStage, getToday, checkInHabit, getWiltingStatus } from '../../utils/habitUtils';
import './HabitCard.css';

export const HabitCard = ({habit, onUpdate}) => {

    const handleCheckIn = () => {
        const updatedHabit = checkInHabit(habit);
        onUpdate(updatedHabit);
    }

    const navigate = useNavigate();

    const navigateToDetailsPage = () => {
        console.log("navigating");
        navigate(`/habits/${habit.id}`, {test: "test"});
    }

    return (
        <div className="card" onClick={navigateToDetailsPage}>
            <div className="card-img-container">
            <p>{getGrowthStage(habit.xp)}</p>
            <p>{getWiltingStatus(habit.wiltingLevel)}</p>
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