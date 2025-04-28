import { useAuth } from '../../context/AuthContext';
import './Header.css';

export const Header = ({clickFunc}) => {
    const {logout} = useAuth();

    return (
        <div className='header'>
            <h1>Habit Garden</h1>
            <button className='primary-btn' onClick={clickFunc}>Add New Habit</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}