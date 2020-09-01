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

    set_loading(true);//set the loading to true
    set_game_over(false);//reset the gameover state

    const new_questions = await fetch_quiz_questions(TOTAL_QUESTIONS, Difficulty.EASY);//fetch the questions from the api

    set_questions(new_questions);//once they have been fetched, set the question state to the questions fetched from the api
    set_score(0);//initialise the score as 0
    set_user_answers([]);//clear the user answers
    set_current_question_number(0);//set the current question to 0
    set_loading(false);//set the loading to false

  }

  const check_answer = (e: React.MouseEvent<HTMLButtonElement>) => {

    if(game_over) return false//if its game over, dont run the function

    const answer = e.currentTarget.value//extract the selected answer
    const answer_is_correct = answer === questions[current_question_number].correct_answer//determine if the answer is correct

    const current_answer:User_answer = {

      question: questions[current_question_number].question,
      answer:answer,
      correct:answer_is_correct,
      correct_answer:questions[current_question_number].correct_answer

    }

    answer_is_correct && set_score(score + 1)

    set_user_answers([...user_answers, current_answer])

    set_current_question_number(current_question_number +1)

  }


  return (

    <div className={classes.container}>

      <h1>Typescript react quiz</h1>

      {(game_over || user_answers.length === TOTAL_QUESTIONS) &&

        <button className={classes.start_button} onClick={() => start_quiz()}>Start</button>

      }

      {!game_over &&

        <p className={classes.score}>{`Score : ${score}`}</p>

      }

      {loading &&

        <p className={classes.loading_text}>Loading questions ...</p>

      }

      {(!loading && !game_over) &&

        <QuestionCard

          question_number={current_question_number + 1}
          total_questions={TOTAL_QUESTIONS}
          question={questions[current_question_number].question}
          answers={questions[current_question_number].answers}
          user_answer={user_answers ? user_answers[current_question_number] : undefined}
          callback={check_answer}

        />

      }

    </div>

  )

}


export default App;
