import {createSlice, configureStore} from '@reduxjs/toolkit';

const strSlice = createSlice({
    name: 'strSlice',
    initialState:{value:0},
    reducers:{
        append:(state, action) => {
            state.value = state.value + action.ch;
        }
    }
});

export default strSlice;