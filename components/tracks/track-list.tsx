import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Image} from 'react-native';
import {TrackItem} from './track';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useActions} from '../../state/hooks/use-actions';
import {Searchbar} from '../searchbar';

export const TrackList: React.FC<{playlistId: string}> = ({playlistId}) => {
  const {tracks, coverImage} = useTypedSelector(state => state.spotify);
  const {fetchPlaylistTracks} = useActions();

  const yOffset = new Animated.Value(0);

  useEffect(() => {
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

  return (
    <>
      <Searchbar />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: yOffset}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <Animated.View
          style={[styles.imageContainer, transitionAnimation(0, 250)]}>
          {coverImage.length > 0 && (
            <Image
              resizeMode="contain"
              style={[styles.image]}
              source={{uri: coverImage[0].url}}
            />
          )}
        </Animated.View>
        <View style={styles.tracksContainer}>
          {tracks &&
            tracks.map((track, i) => {
              return <TrackItem item={track} key={track.id + '-' + i} />;
            })}
        </View>
      </Animated.ScrollView>
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
});
