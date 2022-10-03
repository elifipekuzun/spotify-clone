import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {LibraryHeaderScroll} from './library-header-scroll';
import {UserPlaylistItem} from './user-playlist-item';
import {useActions} from '../../state/hooks/use-actions';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';
import {useNavigation} from '@react-navigation/native';
import {LibraryStackNavigationProps} from '../../navigation';
import {USER_ID} from 'react-native-dotenv';

export const UserPlaylists: React.FC = () => {
  const {userLibrary} = useTypedSelector(state => state.library);
  const {fetchUsersPlaylists} = useActions();
  const navigation = useNavigation<LibraryStackNavigationProps>();

  useEffect(() => {
    fetchUsersPlaylists(USER_ID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <LibraryHeaderScroll />
      {userLibrary &&
        userLibrary.all.map(item => {
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
