// [redux 복습 : 예시일 뿐 실제 이렇게 사용하지 않음]

// import {createStore} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

// store 내에 작은 store를 slice라 한다.
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState:{value:0, mValue:0},
    reducers:{
        up:(state, action) => {
            state.value = state.value + action.step;
        },
        down:(state, action) =>{
            state.mValue = state.mValue - action.step;
        }
    }
});

const strSlice = createSlice({
    name: 'strSlice',
    initialState:{value:0},
    reducers:{
        append:(state, action) => {
            state.value = state.value + action.ch;
        }
    }
});

// 큰 저장소인 store 내에 작은 저장소인 sclice를 포함
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        append:strSlice.reducer
    }
})

/*
function reducer(state, action){ // 이벤트 처리 후 store 저장변수에 갱신
    if(action.type === 'up')
        return {...state, value:state.value + action.step};
    return state;
}

const initialState = {value : 0}; // 초기값 / 어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState); // 공유 저장소
*/

function Counter(){
    const dispatch = useDispatch(); 
    const count = useSelector(state=>state.counter.value); // counter에 있는 value 값을 가져오겠다.
    const mCount = useSelector(state=>state.counter.mValue);
    const str = useSelector(state=>state.append.value); 

    return (
        <div>
            <button onClick={()=>{
                dispatch({type:'counterSlice/up', step:2}); 
            }}>+</button> {count}
            <br/>
            <button onClick={()=>{
                dispatch({type:'counterSlice/down', step:2}); 
            }}>-</button>{mCount}
             <br/>
            <button onClick={()=>{
                dispatch({type:'strSlice/append', ch: '0'}); 
            }}>+</button>{str}
        </div>
    )
}

function MainApp(){
    return (
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;