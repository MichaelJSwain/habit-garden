import { useState } from "react"
import { Header } from "../components/Header/Header"
import { HabitList } from "../components/HabitList";
import { AddHabitForm } from "../components/AddHabitForm/AddHabitForm.jsx";

export const Dashboard = () => {
    const [habits, setHabits] = useState([{name: 'test habit'}]);

    const handleAddHabit = (newHabit) => {
        // persist data

        // update UI
        setHabits(prevValue => {
            return [...prevValue, newHabit];
        })
    }

    return (
        <>
            <Header></Header>
            <HabitList habits={habits}/>
            <AddHabitForm onAddHabit={handleAddHabit}></AddHabitForm>
        </>
    )
}