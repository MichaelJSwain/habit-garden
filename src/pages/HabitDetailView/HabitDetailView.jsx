import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHabit, getGrowthStage, getToday, getWiltingStatus } from "../../utils/habitUtils";
import './HabitDetailView.css';
import { CheckinHeatmap } from "../../components/CheckinHeatmap/CheckinHeatmap";

export const HabitDetailView = () => {
    const [habit, setHabit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {id} = useParams();

    const getHabit = async () => {
        setIsLoading(true);
        const fetchedHabit = fetchHabit(id);
        setHabit(fetchedHabit);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getHabit();
    }, []);

    return (
        <>
            {isLoading && <div><h1>Loading...</h1></div>}
            {habit &&
            <div className="detail-view">
                <div className="detail-view-header">
                    <h1>{habit.name}</h1>
                </div>
                <div className="detail-view-content">
                    
                        <div>
                            <div className="detail-view-img">
                                <p>{getGrowthStage(habit.xp)}</p>
                                <p>{getWiltingStatus(habit.wiltingLevel)}</p>
                            </div>
                            <div>
                                <div className="detail-view-facts">
                                    <span>XP:</span>
                                    <span>{habit.xp}</span>
                                </div>
                                <div className="detail-view-facts">
                                    <span>Wilting level:</span>
                                    <span>{habit.wiltingLevel}</span>
                                </div>
                                <div className="detail-view-facts">
                                    <span>Start date:</span>
                                    <span>04/04/2025</span>
                                </div>
                                <div className="detail-view-facts">
                                    <span>Frequency:</span>
                                    <span>{habit.frequency}</span>
                                </div>
                                <div className="detail-view-facts">
                                    <span>Number of days:</span>
                                    <span>75</span>
                                </div>
                                <div className="detail-view-facts">
                                    <span>Longest streak:</span>
                                    <span> 20</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h1>Check in history:</h1>
                                </div>
                                <CheckinHeatmap history={habit.history} />
                            </div>
                        </div>
                    
                </div>
            </div>}
        </>
    )
}