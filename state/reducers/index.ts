import {spotifyReducer} from './spotify-reducer';
import {userLibraryReducer} from './user-library-reducer';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
  spotify: spotifyReducer,
  library: userLibraryReducer,
});

export type RootState = ReturnType<typeof reducers>;
