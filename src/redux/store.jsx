import { configureStore }  from '@reduxjs/toolkit';
import counterReducer from '../components/Features/Counter/CounterSlice';

export const store = configureStore({
    reducer : {
         counter : counterReducer,
    }
})
    
