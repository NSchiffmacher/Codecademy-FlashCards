import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        'cards': {}
    },
    reducers: {
        addCard(state, action) {
            // The payload should look like this : action.payload = {
            //                                               id: 'bla'
            //                                               front: 'the front of the topic'
            //                                               back: 'the back of the topic'
            //                                           }
        
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id      : id,
                front   : front,
                back    : back
            };
            
        }
    }
});
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
export const selectCards = (state) => state.cards.cards;