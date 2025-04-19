import { useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { HabitList } from "../components/HabitList/HabitList.jsx";
import { AddHabitForm } from "../components/AddHabitForm/AddHabitForm.jsx";
import { Modal } from "../components/Modal/Modal.jsx";
import { storeHabits, fetchHabits } from "../utils/habitUtils.js";

export const Dashboard = () => {
    const [habits, setHabits] = useState([]);
    const [isShowingModal, setIsShowingModal] = useState(false);

    useEffect(() => {
        // 'fetch' stored habits in localStorage
        const fetchedHabits = fetchHabits();
        setHabits(fetchedHabits);
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