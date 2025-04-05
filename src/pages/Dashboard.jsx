import { useState } from "react"
import { Header } from "../components/Header/Header"
import { HabitList } from "../components/HabitList/HabitList.jsx";
import { AddHabitForm } from "../components/AddHabitForm/AddHabitForm.jsx";

const fakeData = [
    {
        id: 1,
        name: 'meditate',
        frequency: 'Daily',
        streak: 2,
        lastCheckIn: null,
        createdAt: new Date().toISOString().split("T")[0],
        stage: "Seed",
        description: '',
        history: []
    },
    {
        id: 9,
        name: 'study',
        frequency: 'Daily',
        streak: 6,
        lastCheckIn: null,
        createdAt: new Date().toISOString().split("T")[0],
        stage: "Seed",
        description: 'for the test',
        history: []
    }
]

export const Dashboard = () => {
    const [habits, setHabits] = useState(fakeData);

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