import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '~/screens/Home';
import UserInfo from '~/screens/UserInfo';
import UpcomingFees from '../screens/UpcomingFees';

const HomeStack = createStackNavigator();
const UpcomingFeesStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Members" component={HomeScreen} />
    <HomeStack.Screen name="UserInfo" component={UserInfo} />
  </HomeStack.Navigator>
);

const UpcomingFessStack = () => (
  <UpcomingFeesStack.Navigator>
    <UpcomingFeesStack.Screen name="UpcomingFees" component={UpcomingFees} />
  </UpcomingFeesStack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // required to avoid two action bar (header) in app
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Members') {
              iconName = 'home';
            } else {
              iconName = 'money';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="HomeMenu" component={HomeScreenStack}></Tab.Screen>
        <Tab.Screen name="UpcomingFees" component={UpcomingFessStack}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
