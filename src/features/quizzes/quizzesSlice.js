import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addQuizToTopic } from "../topics/topicsSlice";

export const createAndAddQuizz = (quiz) => {
    return (dispatch) => {
        // The payload should look like this : action.payload = {
        //                                               id: 'bla'
        //                                               name: 'more bla'
        //                                               topicId: 'topic id'
        //                                               cardIds: ['card id 1', 'card id 2']
        //                                           }

        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizToTopic({
            topicId     : quiz.topicId,
            quizId      : quiz.id
        }));
    };
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz(state, action) {
            // The payload should look like this : action.payload = {
            //                                               id: 'bla'
            //                                               name: 'more bla'
            //                                               topicId: 'topic id'
            //                                               cardIds: ['card id 1', 'card id 2']
            //                                           }

            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id      : id,
                name    : name,
                topicId : topicId,
                cardIds : cardIds
            }
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;