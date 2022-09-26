import React, {useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {PlaylistItem} from './playlist-item';
import {useActions} from '../../state/hooks/use-actions';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';

export const Playlists: React.FC<{playlistName: string}> = ({playlistName}) => {
  const {playlists} = useTypedSelector(state => state.spotify);
  const {fetchPlaylists} = useActions();

  useEffect(() => {
    fetchPlaylists(playlistName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistName]);

  let title = playlistName.replace('-', ' ');
  title = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal>
        {playlists[playlistName] &&
          playlists[playlistName].map(item => {
            return <PlaylistItem item={item} key={item.id} />;
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
});
