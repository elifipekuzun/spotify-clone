import {ActionTypes} from '../action-types';
import {Category, CategoryPlaylist} from '../category';

export interface GetBrowseCategoriesAction {
  type: ActionTypes.GET_BROWSE_CATEGORIES;
  payload: {
    items: Category[];
  };
}

export interface GetCategoryListAction {
  type: ActionTypes.GET_CATEGORY_LIST;
  payload: {
    categoryPlaylist: CategoryPlaylist[];
  };
}

export type Actions = GetBrowseCategoriesAction | GetCategoryListAction;
