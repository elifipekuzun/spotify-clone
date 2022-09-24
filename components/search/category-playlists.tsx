import React from 'react';
import {CategoryPlaylistItem} from './category-playlist-item';
import {useTypedSelector} from '../../state/hooks/use-typed-selector';

export const CategoryPlaylists = () => {
  const {spotify} = useTypedSelector(state => state);
  return (
    <>
      {spotify.categoryPlaylist.map(playlist => {
        return <CategoryPlaylistItem item={playlist} key={playlist.id} />;
      })}
    </>
  );
};
