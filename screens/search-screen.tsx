import React from 'react';
import {Layout} from '../components/layout/layout';
import {Searchbar} from '../components/searchbar';
import {BrowseList} from '../components/search/browse-list';

const browseList = [
  {
    id: '1',
    title: 'Podcasts',
    bgImage: 'https://i.scdn.co/image/ab67706f00000003fb216d1ce13d5a4952a6180e',
  },
  {
    id: '2',
    title: 'Podcasts',
    bgImage: 'https://i.scdn.co/image/ab67706f00000003fb216d1ce13d5a4952a6180e',
  },
  {
    id: '3',
    title: 'Podcasts',
    bgImage: 'https://i.scdn.co/image/ab67706f00000003fb216d1ce13d5a4952a6180e',
  },
  {
    id: '4',
    title: 'Podcasts',
    bgImage: 'https://i.scdn.co/image/ab67706f00000003fb216d1ce13d5a4952a6180e',
  },
];

export const SearchScreen: React.FC = () => {
  return (
    <Layout>
      <Searchbar />
      <BrowseList categories={browseList} />
    </Layout>
  );
};
