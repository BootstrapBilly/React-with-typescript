import { shuffle_array } from "./Utils"

export type Question = {

    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

}

export type Question_state = Question & { answers: string[] }

export enum Difficulty {

    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"

}

export const fetch_quiz_questions = async (amount: number, difficulty: Difficulty) => {

    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await (await fetch(endpoint)).json()

    console.log(response)

    return response.results.map((question: Question) => (

        {
            ...question,
            answer: shuffle_array([...question.incorrect_answers, question.correct_answer])
        }

    ))


}