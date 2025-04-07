import './Modal.css';

export const Modal = ({children, onClose}) => {
    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div className='modal-header'>
                    <h3>Add New Habit</h3>
                    <button onClick={onClose}>
                        <svg width="0.7857142857142857em" height="1em" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M5.25 6.14844L8.85938 2.51172L9.48828 3.14062L5.85156 6.75L9.48828 10.3867L8.85938 11.0156L5.25 7.37891L1.61328 11.0156L0.984375 10.3867L4.62109 6.75L0.984375 3.14062L1.61328 2.51172L5.25 6.14844Z" fill="#1B1D1F"></path></svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}