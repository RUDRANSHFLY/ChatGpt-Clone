// import {
//     configureStore ,
//     createSlice
// } from '@reduxjs/toolkit';

// const initialState = {
//     myVariable : 'no' as 'yes' | 'no',
// };

// const appSlice = createSlice({
//     name : 'app',
//     initialState,
//     reducers : {
//         setVariable : ( state , action ) => {
//             state.myVariable = action.payload;
//         },
//     },
// });

// const store = configureStore({
//     reducer : appSlice.reducer,
// })

// export const {setVariable} = appSlice.actions;

// export default store ;

// export type RootState = ReturnType<typeof store.getState>;