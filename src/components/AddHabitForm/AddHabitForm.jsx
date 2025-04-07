import './AddHabitForm.css';
import { useState } from "react"
import { createNewHabit } from '../../utils/habitUtils';

export const AddHabitForm = ({onAddHabit}) => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState("Daily");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        const newHabit = createNewHabit(name, frequency, description);
        onAddHabit(newHabit);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="e.g. meditate, exercise" onChange={(e) => setName(e.target.value)} value={name}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="frequency">Frequency:</label>
                <select id="frequency" name="frequency" onChange={(e) => setFrequency(e.target.value)} value={frequency}>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Custom</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="description">Description:</label>
                <textarea type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </fieldset>
            <button>Create Habit</button>
        </form>
    )
}