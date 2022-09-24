import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BrowseItem} from './browse-item';
import {useActions} from '../../state/hooks/use-actions';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProps} from '../../App';

export const BrowseList: React.FC = () => {
  const {fetchBrowseCategories, fetchCategoryList} = useActions();
  const {spotify} = useTypedSelector(state => state);
  const navigation = useNavigation<ScreenNavigationProps>();

  const categoryPlaylistHandler = (categoryId: string) => {
    fetchCategoryList(categoryId);
    navigation.navigate('CategoryPlaylists');
  };

  useEffect(() => {
    fetchBrowseCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id}
        data={spotify.categories}
        renderItem={({item}) => {
          return (
            <BrowseItem
              item={item}
              onPress={() => categoryPlaylistHandler(item.id)}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
});
