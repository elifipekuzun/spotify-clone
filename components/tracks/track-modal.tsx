import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from 'react-native';
import {ModalActionItem} from './modal-action-item';
import {Layout} from '../layout/layout';
import {Track} from '../../state';

export const TrackModal: React.FC<{
  visible: boolean;
  onRequestClose: () => void;
  item: Track;
}> = ({visible, onRequestClose, item}) => {
  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < -120) {
      onRequestClose();
    }
  };
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}>
      <Layout>
        <ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentScroll}>
          <View style={styles.modalHeader}>
            <Image
              resizeMode="contain"
              source={{uri: item.images[0].url}}
              style={styles.image}
            />
            <Text style={[styles.text, styles.songName]}>{item.name}</Text>
            <Text style={styles.artistName}>{item.artists[0].name}</Text>
          </View>
          <View style={styles.modalContent}>
            <ModalActionItem iconName="heart-outline" title="Like" />
            <ModalActionItem
              iconName="ios-remove-circle-outline"
              title="Hide song"
            />
            <ModalActionItem
              iconName="md-musical-notes-outline"
              title="Add to playlist"
            />
            <ModalActionItem title="Add to queue" iconName="list-outline" />
            <ModalActionItem iconName="share-outline" title="Share" />
            <ModalActionItem title="Go to radio" iconName="radio" />
            <ModalActionItem iconName="md-disc-outline" title="View album" />
            <ModalActionItem iconName="person-outline" title="View artist" />
            <ModalActionItem
              iconName="md-person-add-outline"
              title="Song credits"
            />
          </View>
        </ScrollView>

        <Pressable style={styles.closeButton} onPress={onRequestClose}>
          <Text style={styles.text}>Close</Text>
        </Pressable>
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentScroll: {
    paddingVertical: '25%',
  },
  layout: {
    marginBottom: 0,
  },
  modalHeader: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 1,
  },
  image: {
    width: 200,
    height: 200,
    zIndex: 2,
  },
  modalContent: {
    paddingHorizontal: 20,
    width: '100%',
  },

  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.9,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  songName: {
    marginTop: 10,
    fontSize: 18,
  },
  artistName: {
    color: 'white',
    opacity: 0.7,
    marginTop: 6,
  },
});
