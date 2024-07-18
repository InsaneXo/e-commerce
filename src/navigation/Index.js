import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import Address from "../screen/Address";
import OrderSummary from "../screen/OrderSummary";
import Payment from "../screen/Payment";
import OrderSuccessful from "../screen/OrderSuccessful";
import Wishlist from "../screen/Wishlist";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="wishlist"
          component={Wishlist}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="OrderSuccessful"
          component={OrderSuccessful}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
