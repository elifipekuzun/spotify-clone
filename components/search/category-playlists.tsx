import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CategoryPlaylistItems} from './category-playlist-item';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';

export const CategoryPlaylists = () => {
  const {spotify} = useTypedSelector(state => state);
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      numColumns={2}
      keyExtractor={item => item.id}
      data={spotify.categoryPlaylist}
      renderItem={({item}) => {
        return <CategoryPlaylistItems item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
  },
});
