import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusState } from '../../types/reduxTypes';

const initialState: StatusState = {
    dropDown: false,
    modal: false,
    menu: false,
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        updateDropDown(state, action: PayloadAction<boolean>) {
            state.dropDown = action.payload;
        },
        updateModal(state, action: PayloadAction<boolean>) {
            state.modal = action.payload;
        },
        updateMenu(state, action: PayloadAction<boolean>) {
            state.menu = action.payload;
        },
    },
});

export default statusSlice.reducer;
