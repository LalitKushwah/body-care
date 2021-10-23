import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '~/screens/Home';
import UserInfo from '~/screens/UserInfo';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Members" component={HomeScreen} />
    <HomeStack.Screen name="UserInfo" component={UserInfo} />
  </HomeStack.Navigator>
)

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Members"
        screenOptions={({ route }) => ({
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
        <Tab.Screen name="Members" component={HomeScreenStack}></Tab.Screen>
        <Tab.Screen name="Upcoming Fees" component={HomeScreenStack}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
