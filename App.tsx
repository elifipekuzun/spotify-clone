import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  CompositeNavigationProp,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from './screens/home-screen';
import {SearchScreen} from './screens/search-screen';
import {LibraryScreen} from './screens/library-screen';
import {CategoryPlaylistsScreen} from './screens/category-playlists-screen';
import {store} from './state/store';

type SearchStackParamList = {
  Search: undefined;
  CategoryPlaylists: undefined;
};

type TabParamList = {
  Home: undefined;
  search: undefined;
  Library: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<SearchStackParamList>();

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryPlaylists"
        component={CategoryPlaylistsScreen}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          opacity: 0.9,
        },
        tabBarLabelStyle: {
          color: 'white',
          fontWeight: '700',
        },
        tabBarIconStyle: {
          borderColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Icon
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size}
              color={'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={CategoryStackNavigator}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Icon
              name={focused ? 'search-sharp' : 'search-outline'}
              color={'white'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Icon
              name={focused ? 'library' : 'library-outline'}
              color={'white'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export type ScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<SearchStackParamList>
>;

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
