import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TrackItem} from './track';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useActions} from '../../state/hooks/use-actions';
import {Searchbar} from '../searchbar';
import {SortTracks} from './sort-tracks';
import {SortModalView} from './sort-modal-view';
import {TracksActionBar} from './tracks-action-bar';

export const TrackList: React.FC<{playlistId: string; screenName?: string}> = ({
  playlistId,
  screenName,
}) => {
  const {tracks, coverImage} = useTypedSelector(state => state.spotify);
  const {fetchPlaylistTracks} = useActions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const yOffset = new Animated.Value(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
        {screenName !== 'Library' && (
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
          {coverImage.length > 0 && (
            <Image
              resizeMode="contain"
              style={[styles.image]}
              source={{
                uri:
                  tracks.length === 0
                    ? 'https://i.pinimg.com/https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA/28/69/13/2869138747ae54788cfd81f116a2e3f0.jpg'
                    : coverImage[0].url,
              }}
            />
          )}
        </Animated.View>
        <TracksActionBar />
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
});
