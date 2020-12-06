import React from 'react'

const ModalWarning = () => {
    return (
        <div className='modal-warnning'>
            <div className='content'>
                <h1>סבא דודו שואל אם עברת כבר ח"י שנים?</h1>
                <h1>*ומזכיר שהמכירה היא לבני 18+ בלבד</h1>
                <h2>האם גילך הוא מעל 18 ?</h2>
                <div className='buttons'>
                    <a className='yes btn'>כן</a>
                    <a className='no btn'>לא</a>
                </div>
            </div>   
        </div>
    )
}

export default ModalWarning
