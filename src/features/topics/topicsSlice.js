import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        },
        addQuizzId: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        } 
    }
})

export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
export const {addTopic, addQuizzId} = topicsSlice.actions
