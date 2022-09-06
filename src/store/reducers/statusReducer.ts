import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusState } from '../../types/reduxTypes';

const initialState: StatusState = {
    dropDown: false,
};

export const statusSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateDropDown(state, action:PayloadAction<boolean>){
            state.dropDown = action.payload;
        }
    },
});

export default statusSlice.reducer;