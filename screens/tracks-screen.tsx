import React from 'react';
import {Layout} from '../components/layout/layout';
import {TrackList} from '../components/tracks/track-list';
import {HomeStackScreenProps} from '../navigation';

export const TracksScreen: React.FC<HomeStackScreenProps> = ({route}) => {
  const {playlistId} = route.params;
  return (
    <Layout>
      <TrackList playlistId={playlistId} />
    </Layout>
  );
};
