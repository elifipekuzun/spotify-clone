import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from './screens/home-screen';
import {SearchScreen} from './screens/search-screen';
import {LibraryScreen} from './screens/library-screen';

const Tab = createBottomTabNavigator();

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
        name="Search"
        component={SearchScreen}
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
        name="Your Library"
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

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
