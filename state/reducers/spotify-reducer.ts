import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {Category, CategoryPlaylistItem, Track, ImageParams} from '../category';

interface SpotifyReducerState {
  categories: Category[];
  categoryPlaylist: CategoryPlaylistItem[];
  playlists: {
    [key: string]: CategoryPlaylistItem[];
  };
  tracks: Track[];
  coverImage: ImageParams[];
  currentPlaylist: CategoryPlaylistItem;
}

const initialState: SpotifyReducerState = {
  categories: [],
  categoryPlaylist: [],
  playlists: {},
  tracks: [],
  coverImage: [],
  currentPlaylist: {
    id: '',
    description: '',
    images: [],
    href: '',
    name: '',
    follower: {
      href: '',
      total: 0,
    },
    owner: {
      id: '',
      href: '',
    },
  },
};

export const spotifyReducer = (
  state = initialState,
  action: Actions,
): SpotifyReducerState => {
  switch (action.type) {
    case ActionTypes.GET_BROWSE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.items,
      };
    case ActionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        categoryPlaylist: action.payload.categoryPlaylist,
      };
    case ActionTypes.GET_PLAYLISTS:
      const {playlistName, data} = action.payload;
      state.playlists[playlistName] = data;
      return {
        ...state,
        playlists: state.playlists,
      };
    case ActionTypes.GET_PLAYLIST_TRACKS:
      return {
        ...state,
        tracks: action.payload.tracks,
        coverImage: action.payload.coverImage,
        currentPlaylist: action.payload.playlist,
      };
    default:
      return state;
  }
};
