import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Searchbar: React.FC = () => {
  return (
    <View style={styles.search}>
      <Icon name="search-outline" size={24} />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="What do you want to listen to?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    marginVertical: '2%',
  },
  icon: {
    fontWeight: 'bold',
  },
  input: {
    marginLeft: '2%',
  },
});
