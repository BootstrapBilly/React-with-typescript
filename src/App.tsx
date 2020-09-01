import React, { useState } from 'react';

import classes from './App.module.css';

//components
import QuestionCard from "./Components/Question_card/Question_card"

//functions
import { fetch_quiz_questions, Question_state } from "./API"

//types
import { Difficulty } from "./API"

const TOTAL_QUESTIONS = 10;

const App = () => {

  console.log(fetch_quiz_questions(TOTAL_QUESTIONS, Difficulty.EASY))//call the api method to fetch the quiz questions and answers

  type User_answer = {//define the type of question which the user can answer and its properties

    question: string,
    answer: string,
    correct: boolean,
    correct_answer: string

  }

  const [loading, set_loading] = useState(false);
  const [questions, set_questions] = useState<Question_state[]>([]);//set the type of the question state to a questionstate array
  const [current_question_number, set_current_question_number] = useState(0);
  const [user_answers, set_user_answers] = useState<User_answer[]>([]);
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
