import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import Home from "./Screens/Home";
import RestaurantDetail from "./Screens/RestaurantDetail";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const store = configureStore();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
