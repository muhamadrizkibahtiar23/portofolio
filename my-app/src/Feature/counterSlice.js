import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice ({
   name : 'counter',
    initialState: {
        value: 5,
        test: 'Choose a type'
    },
    reducers :{
        increment: state=>{
            state.value += 1
        },
        decrement: state=>{
            state.value -= 1
        }
    }
})
export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer