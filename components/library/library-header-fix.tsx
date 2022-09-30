import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CreatePlaylistModal} from './create-playlist-modal';

export const LibraryHeaderFix: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.avatar}>
          <Text>E</Text>
        </View>
        <Text style={styles.title}>Your Library</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Icon name="search" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <Icon name="add" size={34} color="white" />
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <CreatePlaylistModal
          isVisible={isModalVisible}
          onRequestClose={() => setIsModalVisible(!isModalVisible)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-around',
  },
  rightContainer: {
    flexDirection: 'row',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#9370db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
