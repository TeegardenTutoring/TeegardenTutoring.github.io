import React, { useState } from 'react';

const problems = [
    {
        fancyName: "Elementary School",
        question: "There are 100 centimeters in a meter, and 1,000 milliliters in a liter. One cubic centimeter is equal to one milliliter. How many liters are in one cubic meter?",
        answers: ["0.1", "10", "100", "1,000"],
        correctAnswer: 3,
    },
    {
        fancyName: "Middle School",
        question: "Asha lives 2 miles south and 15 miles east of the post office. Felipe lives 12 miles south and 9 miles west of the post office. How far apart do Asha and Felipe live?",
        answers: ["16 miles", "26 miles", "34 miles", "38 miles"],
        correctAnswer: 1,
    },
    {
        fancyName: "High School",
        question: "How many times must the cannonballs fly?",
        answers: ["none", "42", "69", "blowin' in the wind"],
        correctAnswer: 3,
    },
];

function Quizlet() {
    const [problemIndex, setProblemIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);

    const problem = problems[problemIndex];

    const inputAnswer = (idx) => {
        setCorrect((idx === problem.correctAnswer));
        setAnswered(true);
    };
    const goBack = () => {
        setAnswered(false);
    }

    if (!answered) {
        return (
            <div className="quizlet">
                <nav className="grade-level-menu">
                    {problems.map((problem, idx) => {
                        return <button onClick={() => { setProblemIndex(idx)}} key={`problem-${idx}`}>{problem.fancyName}</button>
                    })}
                </nav>
                <div className="problem">
                    <span className="question">{problem.question}</span>
                    <div className="answers">
                    { problem.answers.map((answer, idx) => {
                        return (
                            <button onClick={() => { inputAnswer(idx) }} className="answer-button" key={`answer-${idx}`}>{answer}</button>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div className="quizlet">
            <button onClick={goBack}>⬅ Back</button>
            { correct ? 
            <div>
                <h2>Correct!</h2>
            </div> 
            : 
            <div>
                <h2>Incorrect!</h2>
            </div> }
        </div>
        );
    }
};

export default Quizlet;