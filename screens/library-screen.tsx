import React from 'react';
import {Layout} from '../components/layout/layout';
import {LibraryHeaderFix} from '../components/library/library-header-fix';
import {UserPlaylists} from '../components/library/user-playlists';

export const LibraryScreen: React.FC = () => {
  return (
    <Layout>
      <LibraryHeaderFix />
      <UserPlaylists />
    </Layout>
  );
};
