import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {CategoryPlaylistItem} from '../../state';

const {width} = Dimensions.get('window');

export const PlaylistItem: React.FC<{item: CategoryPlaylistItem}> = ({
  item,
}) => {
  return (
    <TouchableOpacity>
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
    marginHorizontal: 5,
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
