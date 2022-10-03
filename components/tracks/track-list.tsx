import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ActivityIndicator,
  Text,
} from 'react-native';
import {TrackItem} from './track';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useActions} from '../../state/hooks/use-actions';
import {Searchbar} from '../searchbar';
import {SortTracks} from './sort-tracks';
import {SortModalView} from './sort-modal-view';
import {TracksActionBar} from './tracks-action-bar';
import {TrackModal} from './track-modal';

export const TrackList: React.FC<{
  playlistId: string;
  userPlaylist: boolean;
}> = ({playlistId, userPlaylist}) => {
  const {tracks, coverImage, currentPlaylist} = useTypedSelector(
    state => state.spotify,
  );
  const {fetchPlaylistTracks} = useActions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTrackModalVisible, setIsTrackModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const yOffset = new Animated.Value(0);
  console.log(playlistId);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    fetchPlaylistTracks(playlistId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  const transitionAnimation = (index: number, scrollHeight: number) => {
    return {
      opacity: yOffset.interpolate({
        inputRange: [
          (index - 1) * scrollHeight,
          index * scrollHeight,
          (index + 1) * scrollHeight,
        ],
        outputRange: [0, 1, 0],
      }),
      transform: [
        {
          scale: yOffset.interpolate({
            inputRange: [
              (index - 1) * scrollHeight,
              index * scrollHeight,
              (index + 1) * scrollHeight,
            ],
            outputRange: [0.5, 1, 0.5],
          }),
        },
      ],
    };
  };

  if (isLoading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: yOffset}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {tracks.length !== 0 && (
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Find in playlist"
              style={styles.search}
              placeholderTextColor="white"
              iconColor="white"
            />
            <SortTracks onPress={() => setIsModalVisible(!isModalVisible)} />
          </View>
        )}
        <Animated.View
          style={[styles.imageContainer, transitionAnimation(0, 250)]}>
          <Image
            resizeMode="contain"
            style={[styles.image]}
            source={{
              uri:
                tracks.length === 0 || coverImage.length === 0
                  ? 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'
                  : coverImage[0].url,
            }}
          />
        </Animated.View>
        {currentPlaylist && (
          <Text style={styles.description}>{currentPlaylist.description}</Text>
        )}
        <TracksActionBar
          onPressMore={() => setIsTrackModalVisible(!isTrackModalVisible)}
        />
        <View style={styles.tracksContainer}>
          {tracks &&
            tracks.map((track, i) => {
              return <TrackItem item={track} key={track.id + '-' + i} />;
            })}
        </View>
      </Animated.ScrollView>
      {isModalVisible && (
        <SortModalView
          isSortModalVisible={isModalVisible}
          onSortModalClose={() => setIsModalVisible(!isModalVisible)}
        />
      )}
      {isTrackModalVisible && currentPlaylist && (
        <TrackModal
          userTrackModal={userPlaylist}
          visible={isTrackModalVisible}
          onRequestClose={() => setIsTrackModalVisible(!isTrackModalVisible)}
          item={currentPlaylist}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '15%',
  },
  image: {
    width: 240,
    height: 240,
  },
  tracksContainer: {
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    backgroundColor: 'gray',
    opacity: 0.4,
    width: '80%',
    paddingVertical: '1.5%',
  },
  description: {
    color: 'rgba(270, 270, 270, 0.8)',
  },
});
