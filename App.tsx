import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from './screens/home-screen';
import {SearchScreen} from './screens/search-screen';
import {LibraryScreen} from './screens/library-screen';
import {CategoryPlaylistsScreen} from './screens/category-playlists-screen';
import {TracksScreen} from './screens/tracks-screen';
import {AddSongToListScreen} from './screens/add-songs-to-list-screen';
import {store} from './state/store';
import {
  SearchStackParamList,
  TabParamList,
  HomeStackParamList,
  LibraryStackParamList,
} from './navigation';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<SearchStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const LibraryStack = createStackNavigator<LibraryStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Tracks"
        component={TracksScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            opacity: 0.9,
          },
          headerTintColor: 'white',
        }}
      />
    </HomeStack.Navigator>
  );
};

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
            opacity: 0.9,
          },
          headerTintColor: 'white',
        }}
        name="CategoryPlaylists"
        component={CategoryPlaylistsScreen}
      />
      <Stack.Screen
        name="Tracks"
        component={TracksScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
            opacity: 0.9,
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          headerShown: false,
        }}
      />
      <LibraryStack.Screen
        name="AddSongToList"
        component={AddSongToListScreen}
        options={{
          headerTitle: '',
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            opacity: 0.9,
          },
        }}
      />
    </LibraryStack.Navigator>
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
        component={HomeStackNavigator}
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
        name="library"
        component={LibraryStackNavigator}
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
