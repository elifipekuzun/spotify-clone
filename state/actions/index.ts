import {ActionTypes} from '../action-types';
import {
  Category,
  CategoryPlaylistItem,
  UserPlaylist,
  Track,
  ImageParams,
} from '../category';

export interface GetBrowseCategoriesAction {
  type: ActionTypes.GET_BROWSE_CATEGORIES;
  payload: {
    items: Category[];
  };
}

export interface GetCategoryPlaylist {
  type: ActionTypes.GET_CATEGORY_LIST;
  payload: {
    categoryPlaylist: CategoryPlaylistItem[];
  };
}

export interface GetPlaylists {
  type: ActionTypes.GET_PLAYLISTS;
  payload: {
    playlistName: string;
    data: CategoryPlaylistItem[];
  };
}

export interface GetUsersPlaylistsAction {
  type: ActionTypes.GET_USERS_PLAYLISTS;
  payload: {
    userPlaylists: UserPlaylist[];
  };
}

export interface GetPlaylistTracksAction {
  type: ActionTypes.GET_PLAYLIST_TRACKS;
  payload: {
    playlist: CategoryPlaylistItem;
    tracks: Track[];
    coverImage: ImageParams[];
  };
}

export interface CreatePlaylistAction {
  type: ActionTypes.CREATE_PLAYLIST;
  payload: {
    createdPlaylist: UserPlaylist;
  };
}

export interface DeleteUserPlaylistAction {
  type: ActionTypes.DELETE_USER_PLAYLIST;
  payload: {};
}

export type Actions =
  | GetBrowseCategoriesAction
  | GetCategoryPlaylist
  | GetPlaylists
  | GetUsersPlaylistsAction
  | GetPlaylistTracksAction
  | CreatePlaylistAction;
