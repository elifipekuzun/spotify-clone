import React from 'react';
import {View, TextInput, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Searchbar: React.FC<{
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  placeholderTextColor: string;
  iconColor: string;
}> = ({placeholder, style, placeholderTextColor, iconColor}) => {
  return (
    <View style={[styles.search, style]}>
      <Icon name="search-outline" size={24} color={iconColor} />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
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
    width: '100%',
  },
});
