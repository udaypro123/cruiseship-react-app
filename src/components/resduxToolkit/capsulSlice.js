import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getcapsuldata = createAsyncThunk('capsuls/capsulitem', async () => {

    const response = await fetch(`https://api.spacexdata.com/v3/capsules/`)
    const data = await response.json();
    return data;
})


export const capsulSlice = createSlice({
    name: "capsul",

    initialState: {
        capsuldata: [],
        popupitem:[],
        status: false,
        error: false,
    },


    reducers: {
        additem(state, action){
            state.popupitem=action.payload
        }
    },

    extraReducers: (builder) => {

        builder.addCase(getcapsuldata.pending, (state, action) => {
            state.status = false;
        })
        builder.addCase(getcapsuldata.fulfilled, (state, action) => {
            state.capsuldata = action.payload;
            state.status = true;
        })
        builder.addCase(getcapsuldata.rejected, (state, action) => {
            state.status = false;
            state.error = true;
        })
    },

})

export const {additem}= capsulSlice.actions;
export default capsulSlice.reducer;