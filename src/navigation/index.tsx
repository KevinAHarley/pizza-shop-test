import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import { useBasket, useBasketProducts } from "../context/BasketContext";
import useColorScheme from "../hooks/useColorScheme";
import BasketScreen from "../screens/BasketScreen";
import MenuScreen from "../screens/MenuScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import menuData from "../services/mockMenu";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, RootTabParamList } from "./types";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { quantity, totalPrice } = useBasketProducts(menuData);
  const { clearBasket } = useBasket();

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <BottomTab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={() => ({
          title: "Menu",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          headerRight: () => (
            <View style={{ paddingRight: 16 }}>
              <Text style={{ color: "white" }}>Basket: £{(totalPrice / 100).toFixed(2)}</Text>
            </View>
          )
        })}
      />
      <BottomTab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          title: `Basket (${quantity})`,
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
          headerRight: () => (
            <Pressable onPress={() => clearBasket()}>
              <View style={{ paddingRight: 16 }}>
                <Text style={{ color: "white" }}>Clear Basket</Text>
              </View>
            </Pressable>
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
