import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const url = 'http://localhost:3000/artist/data'

type artistData = {
    name: string,
    date_of_birth: any,
    bio: string,
    _id:string
}

type artistEditData = {
    name: string,
    date_of_birth: any,
    bio: string,
    _id:string,
    type:boolean
}

type InitialState = {
    artistData: artistData[]
    editData:artistEditData[]
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
    artistData: [],
    editData:[],
    status: ''
}

export const artistSlice = createSlice({
    'name': 'artists',
    initialState,
    reducers: {
        setartistData: (state, actions) => {
            state.artistData = actions.payload
        },
        setEditArtistData: (state, actions) => {
            state.editData = actions.payload
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        }
    }
})

export function FetchArtistApi() {
    return async function fetchArtistApi(dispatch:any) {
        dispatch(setStatus(Status.Loading))
        try {
            const resData = await axios.get(url);
            dispatch(setartistData(resData.data.data));
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e)
            dispatch(setStatus(Status.Errors))
        }
    }
}



export function ArtistUpdate(data:artistData,action:string, id:string) {
    return async function artistUpdate(dispatch:any) {
        try {
            dispatch(setStatus(Status.Sending))
            switch (action) {
                case "Add": {
                    dispatch(setStatus(Status.Uploading));
                    await axios.post(url, data);
                    dispatch(setStatus(Status.Update));
                    break;
                }
                case "Edit": {
                    dispatch(setStatus(Status.Updating))
                    await axios.put(`${url}/${id}`, data);
                    dispatch(setStatus(Status.Update));
                    break;
                }
                case "Delete": {
                    dispatch(setStatus(Status.Deleting))
                    await axios.delete(`${url}/${id}`);
                    dispatch(setStatus(Status.Update));
                    break;
                }
                default: {
                    console.log("No Update");
                    dispatch(setStatus(Status.Idle))
                }
            }
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e);
            dispatch(setStatus(Status.Errors))
        }
    }
}

export const { setartistData, setEditArtistData, setStatus } = artistSlice.actions;

export default artistSlice.reducer