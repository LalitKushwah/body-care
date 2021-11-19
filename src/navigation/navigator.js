import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '~/screens/Home';
import UserInfo from '~/screens/UserInfo';
import UpcomingFees from '../screens/UpcomingFees';
import MemberDetail from '../screens/MemberDetail';

const HomeStack = createStackNavigator();
const UpcomingFeesStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: '#5e3d9f' }
};

const HomeScreenStack = () => (
  <HomeStack.Navigator screenOptions={{
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  }}>
    <HomeStack.Screen
      name="Members"
      component={HomeScreen}
      options={screenOptions} />
    <HomeStack.Screen
      name="Member Detail"
      component={MemberDetail}
      options={screenOptions}
    >
    </HomeStack.Screen>
    <HomeStack.Screen
      name="UserInfo"
      component={UserInfo}
      options={screenOptions} />
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
            if (route.name === 'HomeMenu') {
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
