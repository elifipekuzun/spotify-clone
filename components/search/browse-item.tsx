import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

interface Category {
  id: string;
  title: string;
  bgImage: string;
}

export const BrowseItem: React.FC<{item: Category}> = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{uri: item.bgImage}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: '3%',
    marginVertical: '5%',
  },
  image: {
    flex: 1,
    padding: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
