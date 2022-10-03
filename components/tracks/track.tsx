import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import {Track} from '../../state';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TrackModal} from './track-modal';

export const TrackItem: React.FC<{item: Track}> = ({item}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.leftContainer}>
            {item.images.length > 0 && (
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: item.images[0].url}}
              />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.artist}>{item.artists[0].name}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Icon
            name="dots-horizontal"
            size={24}
            color={'white'}
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
        </View>
      </View>
      <TrackModal
        userTrackModal={false}
        item={item}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    marginLeft: '5%',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  artist: {
    color: 'white',
    opacity: 0.7,
    marginTop: 5,
  },
});
