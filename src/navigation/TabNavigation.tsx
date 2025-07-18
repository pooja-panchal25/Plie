import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../modules/home/HomeScreen";
import EventScreen from "../modules/home/EventScreen";
import FavouritesScreen from "../modules/wishlist/FavouritesScreen";
import ProfileScreen from "../modules/home/ProfileScreen";
import Colors from "../assets/styles/Colors";
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
          swipeEnabled: false,
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            let label;

            switch (route.name) {
              case "HomeTab":
                iconName = "search";
                label = "Search";
                break;
              case "EventTab":
                iconName = "calendar-outline";
                label = "Event";
                break;
              case "FavoriteTab":
                iconName = "heart-outline";
                label = "Favourites";
                break;
        
              case "ProfileTab":
                iconName = "person-circle-outline";
                label = "Profile";
                break;
            }
            return (
            <View style={{
              backgroundColor:Colors.white,
              justifyContent:'center',
              alignItems:'center',
              paddingTop:10
            }}>
              <Icon
                name={iconName}
                size={22}
                color={Colors.black}
              />
              <Text style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 12,
                  color: Colors.black,
                  width:100,
                  textAlign:'center'
                }}>{label}</Text>     
            </View>
            );
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeScreen} />
        <Tab.Screen name="EventTab" component={EventScreen} />
        <Tab.Screen name="FavoriteTab" component={FavouritesScreen} />
        <Tab.Screen name="ProfileTab" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
export default TabNavigation
