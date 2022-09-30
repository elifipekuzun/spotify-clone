import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const FilledButton: React.FC<{title: string; onPress: () => void}> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(270, 270, 270, 0.7)',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: '10%',
    width: 100,
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
