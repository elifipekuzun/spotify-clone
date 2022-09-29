import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CategoryPlaylistItems} from './category-playlist-item';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {ScreenNavigationProps} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

export const CategoryPlaylists: React.FC = () => {
  const {categoryPlaylist} = useTypedSelector(state => state.spotify);
  const navigation = useNavigation<ScreenNavigationProps>();
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      numColumns={2}
      keyExtractor={item => item.id}
      data={categoryPlaylist}
      renderItem={({item}) => {
        return (
          <CategoryPlaylistItems
            item={item}
            onPress={() => navigation.navigate('Tracks', {playlistId: item.id})}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
  },
});
