import React from 'react'
import classes from './Question_card.module.css'

type Props = {//declare a types object

    question: string;
    answers: string[];
    callback: any;
    user_answer: any;
    question_number: number;
    total_questions: number;

}

const Question_card: React.FC<Props> = ({ question, answers, callback, user_answer, question_number, total_questions }: Props) => {

    return (

        <div className={classes.container}>

            <p className={classes.current_question_number}>{`Question : ${question_number} / ${total_questions}`}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />

            <div className={classes.answers_container}>

                {answers.map(answer => {

                    return <div key={answer}>

                        <button disabled={user_answer} onClick={(e) => callback(e)} value={answer}>

                            <span dangerouslySetInnerHTML={{ __html: answer }} />

                        </button>

                    </div>

                })}

            </div>

        </div>

    )

}

export default Question_card