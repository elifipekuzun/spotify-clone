import React, {useEffect} from 'react';
import {CategoryPlaylists} from '../components/search/category-playlists';
import {Layout} from '../components/layout/layout';
import {PlaylistScreenProps} from '../navigation';

interface Props {
  navigation: PlaylistScreenProps['navigation'];
  route: PlaylistScreenProps['route'];
}

export const CategoryPlaylistsScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const screenTitle = route.params.screenTitle;

  useEffect(() => {
    const listener = () => {
      navigation.setOptions({
        headerTitle: screenTitle,
      });
    };
    navigation.addListener('focus', listener);
    return () => navigation.removeListener('focus', listener);
  }, [navigation, screenTitle]);

  return (
    <Layout>
      <CategoryPlaylists />
    </Layout>
  );
};
