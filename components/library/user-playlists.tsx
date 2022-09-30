import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {LibraryHeaderScroll} from './library-header-scroll';
import {UserPlaylistItem} from './user-playlist-item';
import {useActions} from '../../state/hooks/use-actions';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useNavigation} from '@react-navigation/native';
import {LibraryStackNavigationProps} from '../../navigation';

export const UserPlaylists: React.FC = () => {
  const {userPlaylists} = useTypedSelector(state => state.spotify);
  const {fetchUsersPlaylists} = useActions();
  const navigation = useNavigation<LibraryStackNavigationProps>();

  useEffect(() => {
    if (!userPlaylists.length) {
      fetchUsersPlaylists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <LibraryHeaderScroll />
      {userPlaylists &&
        userPlaylists.map(item => {
          return (
            <UserPlaylistItem
              key={item.id}
              item={item}
              onPress={() =>
                navigation.navigate('AddSongToList', {playlistId: item.id})
              }
            />
          );
        })}
    </ScrollView>
  );
};
