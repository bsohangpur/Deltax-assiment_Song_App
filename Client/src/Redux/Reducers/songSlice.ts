import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const url = 'http://localhost:3000/song/data'

type songData = {
    title: string,
    date_of_release: number,
    artist: string,
    image: [any],
    imageAlt: [string]
    _id: any
}
type InitialState = {
    songData: songData[]
    editData: songData[]
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
    songData: [],
    editData: [],
    status: ''
}

export const SongSlice = createSlice({
    'name': 'songs',
    initialState,
    reducers: {
        setSongData: (state, actions) => {
            state.songData = actions.payload
        },
        setEditSongData: (state, actions) => {
            state.editData = actions.payload
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        }
    }
})

export function FetchApi() {
    return async function fetchApi(dispatch: any) {
        dispatch(setStatus(Status.Loading))
        try {
            const resData = await axios.get(url);
            dispatch(setSongData(resData.data.data));
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e)
            dispatch(setStatus(Status.Errors))
        }
    }
}



export function SongUpdate(data: any, action: string, id: string) {
    return async function songUpdate(dispatch: any) {
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

export const { setSongData, setEditSongData, setStatus } = SongSlice.actions;

export default SongSlice.reducer