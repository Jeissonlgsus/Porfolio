import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    diccName : "",
    diccProfesion : "",
    diccUniversity : "",
}

export const homeSlice = createSlice({
    name : "home",
    initialState,
    reducers : {
        addUser: (state, action) => {
            const { diccName , diccProfesion, diccUniversity} = action.payload;
            state.diccName = diccName;
            state.diccProfesion = diccProfesion;
            state.diccUniversity = diccUniversity;
        }
    }
})

export const { addUser } = homeSlice.actions;
export default homeSlice.reducer
