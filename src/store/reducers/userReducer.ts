import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    rating: number;
}

const initialState: UserState = {
    name: 'Роман Карлович',
    rating: 70,

}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userReducer.reducer;