import {NavigatorScreenParams} from '@react-navigation/native';

import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type SearchStackParamList = {
  Search: undefined;
  CategoryPlaylists: {screenTitle: string};
};

export type TabParamList = {
  Home: undefined;
  search: NavigatorScreenParams<SearchStackParamList>;
  Library: undefined;
};

export type ScreenNavigationProps = StackNavigationProp<
  SearchStackParamList,
  'CategoryPlaylists'
>;

export type PlaylistScreenProps = StackScreenProps<
  SearchStackParamList,
  'CategoryPlaylists'
>;
