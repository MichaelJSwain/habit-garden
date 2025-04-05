import './HabitCard.css';

export const HabitCard = ({habit}) => {
    return (
        <div className="card">
            <div className="card-img-container"></div>
            <div className="card-info-container">
                <h3>{habit.name}</h3>
                <div>
                    <p>Streak: {habit.streak}</p>
                    
                </div>
            </div>
            <div className="card-button-container">
                <button>Water Plant</button>
            </div>
        </div>
    )
}