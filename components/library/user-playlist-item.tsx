import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {UserPlaylist} from '../../state';
import Icon from 'react-native-vector-icons/Ionicons';

export const UserPlaylistItem: React.FC<{item: UserPlaylist}> = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {item.images.length ? (
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: item.images[0].url}}
          />
        ) : (
          <View style={styles.image}>
            <Icon name="play" size={28} color="white" />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  image: {
    width: 90,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  type: {
    color: 'white',
    opacity: 0.7,
    fontSize: 12,
  },
});
