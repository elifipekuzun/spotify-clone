import React from 'react';
import {ScrollView} from 'react-native';
import {OutlinedButton} from '../outlined-button';

export const LibraryHeaderScroll: React.FC = () => {
  return (
    <ScrollView horizontal>
      <OutlinedButton title="Playlists" />
      <OutlinedButton title="Albums" />
      <OutlinedButton title="Artists" />
      <OutlinedButton title="Downloaded" />
    </ScrollView>
  );
};
