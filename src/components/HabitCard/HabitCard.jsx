import './HabitCard.css';

const getGrowthStage = (streak) => {
    if (streak >= 21) return "🌸 Blooming Plant";
    if (streak >= 14) return "🪴 Mature Plant";
    if (streak >= 7) return "🌿 Young Plant";
    if (streak >= 3) return "🌱 Sprout";
    return "🌰 Seed";
  }

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
            <div className="card-img-container">
            <p>{getGrowthStage(habit.streak)}</p>
            </div>
            <div className="card-info-container">
                <h3>{habit.name}</h3>
                <div>
                    <p>Streak: {habit.streak} 🔥</p>
                    
                </div>
            </div>
            <div style={{width: '100%', height:'40px', display: 'flex', alignItems: 'center'}}>
                <div className="card-button-container">
                    <button 
                        onClick={handleCheckIn}  
                        disabled={habit.lastCheckIn === getToday()}
                    >
                        {habit.lastCheckIn === getToday() ? "Checked In ✔" : "Mark as Done 💧"}
                    </button>
                </div>
            </div>
            
        </div>
    )
}