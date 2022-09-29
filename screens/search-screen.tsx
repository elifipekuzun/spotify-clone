import React from 'react';
import {Layout} from '../components/layout/layout';
import {Searchbar} from '../components/searchbar';
import {BrowseList} from '../components/search/browse-list';

export const SearchScreen: React.FC = () => {
  return (
    <Layout>
      <Searchbar
        placeholder="What do you want to listen to?"
        placeholderTextColor="black"
        iconColor="black"
      />
      <BrowseList />
    </Layout>
  );
};
