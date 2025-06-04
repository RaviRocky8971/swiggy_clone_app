import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "city_name" : '',
    "latitude" : '',
    "longitude" : ''
}

const locationSlice = createSlice({
    name : "location",
    initialState,
    reducers : {
        setLocationData :(state,action)=>{
            const {city_name,latitude,longitude} = action.payload
            state.city_name = city_name;
            state.latitude = latitude;
            state.longitude = longitude
        },
        clearLocationData : (state)=>{
            state.action = "";
            state.latitude = "";
            state.longitude = ""
        }
    }
})

export const {setLocationData,clearLocationData} = locationSlice.actions;
export default locationSlice.reducer;