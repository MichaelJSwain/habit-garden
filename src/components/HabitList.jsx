import { HabitCard } from "./HabitCard"

export const HabitList = ({habits}) => {
    return (
        <>
            {habits.map(habit => {
                return <HabitCard habit={habit}/>
            })}
        </>
    )
}