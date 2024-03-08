import { createSlice } from "@reduxjs/toolkit"

const cartItems = createSlice({
    name: 'cartItems',
    initialState:  [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        updateCount(state,action) {
            const id = state.findIndex((item) => item.id === action.payload)
            state[id].count++
        },
        addItem(state,action) {
            const id = state.findIndex((item) => item.id === action.payload.id)
            id === -1 ? state.push(action.payload) : state[id].count++ 
        }
    }
})

export const { updateCount, addItem } = cartItems.actions

export default cartItems