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
        lastCheckIn: '2025-04-05',
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
        lastCheckIn: '2025-04-05',
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

    const handleUpdateHabit = (updatedHabit) => {
        const updatedList = habits.map(h => h.id === updatedHabit.id ? updatedHabit : h);
        setHabits(updatedList);

        // persist data
    }

    const handleCheckIn = (habit) => {
        setHabits(prevValue => {

            const updatedHabits = prevValue.map(h => {
                if (h.id === habit.id) {
                    return {
                        ...h,
                        streak: h.streak + 1,
                        lastCheckIn: new Date().toISOString().split("T")[0]
                    }
                } else {
                    return h;
                }
            })
            console.log(updatedHabits);

            return updatedHabits;
        })
    }

    return (
        <>
            <Header></Header>
            <HabitList habits={habits} onUpdate={handleUpdateHabit}/>
            <AddHabitForm onAddHabit={handleAddHabit}></AddHabitForm>
        </>
    )
}