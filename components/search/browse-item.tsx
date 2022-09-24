import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import {Category} from '../../state';

export const BrowseItem: React.FC<{item: Category; onPress?: () => void}> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: item.icons[0].url}}
          style={styles.image}>
          <Text style={styles.title}>{item.name}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: '3%',
    marginVertical: '5%',
  },
  image: {
    flex: 1,
    padding: '10%',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    position: 'absolute',
    bottom: '2%',
    left: '5%',
  },
});
