import { createSlice } from '@reduxjs/toolkit'

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic(state, action) {
            // The payload should look like this : action.payload = {
            //                                               id: 'bla'
            //                                             name: 'more bla'
            //                                             icon: 'url icon'
            //                                         }
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id      : id,
                name    : name,
                icon    : icon,
                quizIds : []
            };
        }
    }
})
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
export const selectTopics = (state) => state.topics.topics;
