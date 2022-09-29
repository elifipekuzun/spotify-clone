import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TracksActionBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Icon name="cards-heart-outline" size={30} color="darkgrey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="download-circle-outline" size={30} color="darkgrey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="dots-horizontal" size={30} color="darkgrey" />
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={40} color="darkgrey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-circle" size={50} color="lime" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: '5%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '30%',
  },
});
