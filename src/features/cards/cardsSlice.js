import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const cardsSelector = state => state.cards.cards;
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer