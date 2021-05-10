import React, { useState } from 'react';

const problems = [
    {
        fancyName: "Elementary",
        question: "How many roads must a man walk down?",
        answers: ["none", "42", "69", "blowin' in the wind"],
        correctAnswer: 3,
    },
    {
        fancyName: "Middle",
        question: "How many seas must a white dove sail?",
        answers: ["none", "42", "69", "blowin' in the wind"],
        correctAnswer: 3,
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