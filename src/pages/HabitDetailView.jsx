import { useParams } from "react-router-dom"

export const HabitDetailView = () => {
    const {id} = useParams();

    return (
        <h1>Detail view</h1>
    )
}