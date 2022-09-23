import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BrowseItem} from './browse-item';

interface Category {
  id: string;
  title: string;
  bgImage: string;
}

export const BrowseList: React.FC<{categories: Category[]}> = ({
  categories,
}) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id}
        data={categories}
        renderItem={({item}) => {
          return <BrowseItem item={item} />;
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
