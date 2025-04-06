import './HabitCard.css';

const getToday = () => {
    return new Date().toISOString().split("T")[0];
  }
  
const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
}

export const HabitCard = ({habit, onUpdate}) => {
    

    const handleCheckIn = () => {
        const today = getToday();
        if (habit.lastCheckIn === today) return;
    
        const newStreak = habit.lastCheckIn === getYesterday() ? habit.streak + 1 : 1;

        const updatedHabit = {
            ...habit,
            streak: newStreak,
            lastCheckIn: today,
        };

        onUpdate(updatedHabit);
    };

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
                    <button onClick={() => handleCheckIn()}>Water Plant</button>
                </div>}
            </div>
            
        </div>
    )
}