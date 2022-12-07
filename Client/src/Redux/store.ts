import { configureStore } from '@reduxjs/toolkit';
import artistSlice from './Reducers/artistSlice';
import ratingSlice from './Reducers/ratingSlice';
import songSlice from './Reducers/songSlice';


const store = configureStore({
    reducer:{
        song:songSlice,
        artist:artistSlice,
        rating:ratingSlice,
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch