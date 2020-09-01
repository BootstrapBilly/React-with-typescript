import { shuffle_array } from "./Utils"

export type Question = {//define the properties on the question type

    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

}

export type Question_state = Question & { answers: string[] }//define the type of question state, in this case it is the question, with one added properity of answers which is an array of strings

export enum Difficulty {

    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"

}

export const fetch_quiz_questions = async (amount: number, difficulty: Difficulty) => {

    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await (await fetch(endpoint)).json()

    return response.results.map((question: Question) => (

        {
            ...question,
            answers: shuffle_array([...question.incorrect_answers, question.correct_answer])
        }

    ))


}