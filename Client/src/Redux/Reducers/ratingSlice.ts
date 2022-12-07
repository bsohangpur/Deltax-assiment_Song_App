import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const url = 'http://localhost:3000/song/data/rating/add'

type ratingData = {
    name: string,
    email: string,
    rating: number
}


type InitialState = {
    ratingData: ratingData[]
    status: string
}

const Status = Object.freeze({
    Idle: "idle",
    Loading: "loading",
    Errors: "error",
    Sending: "sending",
    Uploading: "uploading",
    Deleting: "deleting",
    Updating: "updating",
    Update: "update"
});

const initialState: InitialState = {
    ratingData: [],
    status: ''
}

export const ratingSlice = createSlice({
    'name': 'ratings',
    initialState,
    reducers: {
        setratingData: (state, actions) => {
            state.ratingData = actions.payload
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        }
    }
})

export function FetchratingApi() {
    return async function fetchratingApi(dispatch: any) {
        dispatch(setStatus(Status.Loading))
        try {
            const resData = await axios.get(url);
            dispatch(setratingData(resData.data.data));
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e)
            dispatch(setStatus(Status.Errors))
        }
    }
}



export function RatingUpdate(data: ratingData, id: string) {
    return async function ratingUpdate(dispatch: any) {
        try {
            dispatch(setStatus(Status.Sending))
            dispatch(setStatus(Status.Uploading));
            await axios.put(`${url}/${id}`, {rating:data});
            dispatch(setStatus(Status.Update));
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e);
            dispatch(setStatus(Status.Errors))
        }
    }
}

export const { setratingData, setStatus } = ratingSlice.actions;

export default ratingSlice.reducer