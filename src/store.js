import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartItems from './store/cartItemsSlice'

const user = createSlice({
    name: 'user',
    initialState: 'kim'
})

export default configureStore({
  reducer: { 
    user: user.reducer,
    cartItems: cartItems.reducer
  }
}) 