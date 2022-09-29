import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CategoryPlaylistItem} from '../../state';

const {width} = Dimensions.get('screen');

export const CategoryPlaylistItems: React.FC<{
  item: CategoryPlaylistItem;
  onPress: () => void;
}> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: item.images[0].url}}
        />

        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,
    height: 200,
    marginVertical: '5%',
    marginHorizontal: '2%',
  },
  image: {
    width: '100%',
    height: '90%',
  },
  title: {
    color: 'white',
    fontWeight: '700',
  },
});
