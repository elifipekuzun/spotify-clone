import React from 'react';
import {Layout} from '../components/layout/layout';
import {TrackList} from '../components/tracks/track-list';
import {LibraryStackScreenProps} from '../navigation';

export const AddSongToListScreen: React.FC<LibraryStackScreenProps> = ({
  route,
}) => {
  const id = route.params.playlistId;
  return (
    <Layout>
      <TrackList playlistId={id} screenName="Library" />
    </Layout>
  );
};
