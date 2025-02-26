import { useState, useCallback } from "react";
import questions from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <div id='summary'>
                <img src={quizComplete} alt="Complete icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}