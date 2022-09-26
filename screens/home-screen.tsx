import React from 'react';
import {ScrollView} from 'react-native';
import {Layout} from '../components/layout/layout';
import {Playlists} from '../components/home/playlists';

export const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <ScrollView>
        <Playlists playlistName="featured-playlists" />
        <Playlists playlistName="new-releases" />
      </ScrollView>
    </Layout>
  );
};
