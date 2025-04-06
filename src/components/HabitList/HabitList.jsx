import './HabitList.css'
import { HabitCard } from "../HabitCard/HabitCard.jsx"

export const HabitList = ({habits, onUpdate}) => {
    return (
        <div className='habit-list'>
            {habits.map(habit => {
                return <HabitCard key={habit.id} habit={habit} onUpdate={onUpdate}/>
            })}
        </div>
    )
}