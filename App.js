// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";

// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "./screens/AuthenticationScreen";
import { GlobalStyles } from "./constants/colors";
import { StatusBar } from "react-native";
import AuthContextProvider from "./store/auth-context";
import LanguageSelector from "./screens/LanguageSelectorScreen";
import LanguageContextProvider from "./store/language-context";
import CharacterListScreen from "./screens/CharacterListScreen";
import CharacterDetailScreen from "./screens/CharacterDetailScreen";
// import { GlobalStyles } from "./constants/colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <LanguageContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Authentication"
              screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.huskyPurple,
                },
              }}
            >
              <Stack.Screen name="Authentication" component={Authentication} />
              <Stack.Screen
                name="languageSelector"
                component={LanguageSelector}
                options={{
                  title: "Choose Your Language",
                  headerLeftLabelVisible: false,
                  headerLeft: null,
                }}
              />
              <Stack.Screen
                name="characterList"
                component={CharacterListScreen}
              />
              <Stack.Screen
                name="CharacterDetail"
                component={CharacterDetailScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar barStyle={"light-content"} />
        </LanguageContextProvider>
      </AuthContextProvider>
    </>
  );
}
