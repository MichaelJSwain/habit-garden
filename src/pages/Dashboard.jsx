import { useState } from "react"
import { Header } from "../components/Header/Header"
import { HabitList } from "../components/HabitList";

export const Dashboard = () => {
    const [habits, setHabits] = useState([{name: 'test habit'}]);


    return (
        <>
            <Header></Header>
            <HabitList habits={habits}/>
        </>
    )
}