import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ledState: false,
    fanState: false,
    ledPlusState: false,
}

const ledReducer = createSlice({
    name: "ledReducer",
    initialState,
    reducers: {
        handleLed: (state, action) => {
            state.ledState = action.payload
        },
        handleFan: (state, action) => {
            state.fanState = action.payload
        },
        handleLedPlus: (state, action) => {
            state.ledPlusState = action.payload
        },
    }
})

const reducers = ledReducer.reducer
export const {handleLed, handleFan, handleLedPlus} = ledReducer.actions

export default reducers