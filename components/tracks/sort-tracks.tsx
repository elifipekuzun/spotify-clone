import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const SortTracks: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Sort</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'gray',
    opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 9.5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
