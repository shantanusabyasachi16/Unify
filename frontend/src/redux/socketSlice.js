import {createSlice} from "@reduxjs/toolkit"


const Socketslice = createSlice({
    name:"socket",
    initialState:{
        socket:null
    },
    reducers:{
        setsocket:(state,action)=>{
state.socket = action.payload;
        }
    }
})

export const {setsocket} = Socketslice.actions;
export default Socketslice.reducer;