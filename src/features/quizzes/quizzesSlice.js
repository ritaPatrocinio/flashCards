import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
}
)

export const newQuizzActionCreator = (quiz) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizzId({quizId: quiz.id, topicId: quiz.topicId}))
    }
}


export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;
