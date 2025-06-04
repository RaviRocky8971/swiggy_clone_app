import { createSlice } from "@reduxjs/toolkit";
// import reducer from "../locationSlice";

const initialState = {
    "filterData" : ""
}

const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        setfilterData : (state,action) =>{
            const {filterData} = action.payload
            state.selectedfilterData = filterData
        }
    }
})

export const {setfilterData} = filterSlice.actions
export default filterSlice.reducer;