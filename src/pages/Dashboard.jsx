import { useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { HabitList } from "../components/HabitList/HabitList.jsx";
import { AddHabitForm } from "../components/AddHabitForm/AddHabitForm.jsx";
import { Modal } from "../components/Modal/Modal.jsx";

const HABITS_KEY = "habit_list";

export const Dashboard = () => {
    const [habits, setHabits] = useState([]);
    const [isShowingModal, setIsShowingModal] = useState(false);

    useEffect(() => {
        // 'fetch' stored habits in localStorage
        const stored = localStorage.getItem(HABITS_KEY);

        if (stored) {
            const parsedHabits = JSON.parse(stored);
            setHabits(parsedHabits);
        }
    }, []);

    const handleAddHabit = (newHabit) => {
        const updatedList = [...habits, newHabit];
        // update UI
        setHabits(updatedList);

        // persist data
        storeHabits(updatedList);
        
        // close
        setIsShowingModal(false);
    }

    const handleUpdateHabit = (updatedHabit) => {
        const updatedList = habits.map(h => h.id === updatedHabit.id ? updatedHabit : h);
        setHabits(updatedList);

        // persist data
        storeHabits(updatedList);
    }

    const storeHabits = (habitList) => {
        const stringifiedHabits = JSON.stringify(habitList);
        localStorage.setItem(HABITS_KEY, stringifiedHabits);
    }

    return (
        <>
            <Header clickFunc={() => setIsShowingModal(!isShowingModal)}></Header>
            <HabitList habits={habits} onUpdate={handleUpdateHabit}/>
            
           
            <Modal isShowing={isShowingModal} onClose={() => setIsShowingModal(false)}>
                <AddHabitForm onAddHabit={handleAddHabit}></AddHabitForm>
            </Modal>
        </>
    )
}