import {ActionTypes} from '../action-types';
import {Category, CategoryPlaylistItem} from '../category';

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

export type Actions = GetBrowseCategoriesAction | GetCategoryPlaylist;
