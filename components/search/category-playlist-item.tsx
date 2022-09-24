import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {CategoryPlaylist} from '../../state';

export const CategoryPlaylistItem: React.FC<{item: CategoryPlaylist}> = ({
  item,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.images[0]}} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {},
  title: {},
});
