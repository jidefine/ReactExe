import {createSlice, configureStore} from '@reduxjs/toolkit';
import counterSlice from './CountetStore';
import strSlice from './StrStore';

// 큰 저장소인 store 내에 작은 저장소인 sclice를 포함
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        append:strSlice.reducer
    }
})

export default store;