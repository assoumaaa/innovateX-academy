import React from 'react'
import '../../sass/Modules/M1/MindMappingQuiz.scss'

export const MindMappingQuiz = ({ SetModuleOneQuiz }) => {
    return (
        <div className="mindMappingQuiz">
            <img src='../../images/m1/mindMapQuiz.jpeg' alt='quiz' />
            <span>Let's test your knowledge with a small quiz!</span>
            <button onClick={() => {
                SetModuleOneQuiz(true);
            }}>Start</button>
        </div>
    )
}
