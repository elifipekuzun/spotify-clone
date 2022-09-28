import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ModalActionItem: React.FC<{title: string; iconName: string}> = ({
  title,
  iconName,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.modalContentItem}>
        <Icon style={styles.icon} name={iconName} size={26} color={'white'} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalContentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
