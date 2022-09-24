import {spotifyReducer} from './spotify-reducer';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
  spotify: spotifyReducer,
});

export type RootState = ReturnType<typeof reducers>;
