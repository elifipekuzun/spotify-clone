import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export const OutlinedButton: React.FC<{title: string}> = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 12,
  },
});
