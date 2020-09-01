import React, { useState } from 'react';

import classes from './App.module.css';

//components
import QuestionCard from "./Components/Question_card/Question_card"

//functions
import {fetch_quiz_questions} from "./API"

//types
import {Difficulty} from "./API"

const TOTAL_QUESTIONS = 10;

const App = () => {

  console.log(fetch_quiz_questions(TOTAL_QUESTIONS, Difficulty.EASY))

  const [loading, set_loading] = useState(false);
  const [questions, set_questions] = useState([]);
  const [current_question_number, set_current_question_number] = useState(0);
  const [user_answers, set_user_answers] = useState([]);
  const [score, set_score] = useState(0);
  const [game_over, set_game_over] = useState(true);

  const start_quiz = async () => {

    console.log("started")
  }

  const check_answer = (e: React.MouseEvent<HTMLButtonElement>) => {


  }

  const next_question = () => {


  }

  return (

    <div className={classes.container}>

      <h1>Typescript react quiz</h1>
      <button className={classes.start_button} onClick={() => start_quiz()}>Start</button>
      <p className={classes.score}>Score :</p>
      <p className={classes.loading_text}>Loading questions ...</p>
{/* 
      <QuestionCard

        question_number={current_question_number + 1} 
        total_questions={TOTAL_QUESTIONS}
        question={questions[current_question_number].question}
        answers={questions[current_question_number].answers}
        user_answer={user_answers ? user_answers[current_question_number] : undefined}
        callback={()=> check_answer}

        /> */}

      <button className={classes.next_button} onClick={() => next_question()}>Next</button>

    </div>

  )

}


export default App;
