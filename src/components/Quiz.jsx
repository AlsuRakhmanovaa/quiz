import { useState, useCallback } from "react";
import questions from "../questions.js";
import Question from "./Question.jsx";
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

    return (
        <div id='quiz'>
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}  
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}