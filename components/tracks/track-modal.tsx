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
import {MoreModalContent} from '../library/more-modal-content';
import {Layout} from '../layout/layout';
import {Track, CategoryPlaylistItem} from '../../state';

export const TrackModal: React.FC<{
  visible: boolean;
  onRequestClose: () => void;
  item: Track | CategoryPlaylistItem;
  userTrackModal: boolean;
}> = ({visible, onRequestClose, item, userTrackModal}) => {
  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < -120) {
      onRequestClose();
    }
  };

  const isInstanceOfTrack = (variable: any): variable is Track => {
    return typeof variable.artists !== 'undefined';
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
              source={{
                uri:
                  item.images.length === 0
                    ? 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'
                    : item.images[0].url,
              }}
              style={styles.image}
            />
            <Text style={[styles.text, styles.songName]}>{item.name}</Text>
            {isInstanceOfTrack(item) && (
              <Text style={styles.artistName}>{item.artists[0].name}</Text>
            )}
          </View>
          <View style={styles.modalContent}>
            <MoreModalContent
              instanceofTrack={isInstanceOfTrack(item)}
              userTrackModal={userTrackModal}
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
