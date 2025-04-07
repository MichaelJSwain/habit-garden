import './Header.css';

export const Header = ({clickFunc}) => {
    return (
        <div className='header'>
            <h1>Habit Garden</h1>
            <button className='primary-btn' onClick={clickFunc}>Add New Habit</button>
        </div>
    )
}