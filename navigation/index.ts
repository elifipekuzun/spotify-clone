import {NavigatorScreenParams} from '@react-navigation/native';

import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  Tracks: {playlistId: string};
};

export type LibraryStackParamList = {
  Library: undefined;
  AddSongToList: {playlistId: string};
};

export type SearchStackParamList = {
  Search: undefined;
  CategoryPlaylists: {screenTitle: string};
  Tracks: {playlistId: string};
};

export type TabParamList = {
  Home: undefined;
  search: NavigatorScreenParams<SearchStackParamList>;
  library: undefined;
};

export type ScreenNavigationProps = StackNavigationProp<
  SearchStackParamList,
  'CategoryPlaylists'
>;

export type PlaylistScreenProps = StackScreenProps<
  SearchStackParamList,
  'CategoryPlaylists'
>;

export type HomeStackNavigationProps = StackNavigationProp<
  HomeStackParamList,
  'Tracks'
>;
export type LibraryStackNavigationProps = StackNavigationProp<
  LibraryStackParamList,
  'AddSongToList'
>;

export type LibraryStackScreenProps = StackScreenProps<
  LibraryStackParamList,
  'AddSongToList'
>;

export type HomeStackScreenProps = StackScreenProps<
  HomeStackParamList,
  'Tracks'
>;
