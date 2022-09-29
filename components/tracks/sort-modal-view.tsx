import React from 'react';
import {View, Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const SortModalView: React.FC<{
  isSortModalVisible: boolean;
  onSortModalClose: () => void;
}> = ({isSortModalVisible, onSortModalClose}) => {
  return (
    <View
      style={styles.container}
      onTouchStart={event => {
        if (
          event.nativeEvent.locationY > 200 &&
          event.nativeEvent.locationY < 490
        ) {
          onSortModalClose();
        }
      }}>
      <Modal
        animationType="slide"
        visible={isSortModalVisible}
        transparent
        onRequestClose={onSortModalClose}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Sort by</Text>
          <TouchableOpacity>
            <Text style={styles.sortItem}>Custom order</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sortItem}>Title</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sortItem}>Artist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sortItem}>Album</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sortItem}>Recently Added</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSortModalClose}>
            <View style={styles.cancelButton}>
              <Text style={styles.title}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  modalView: {
    height: 350,
    backgroundColor: 'dimgray',
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    opacity: 0.7,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  sortItem: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '3%',
  },
  cancelButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
