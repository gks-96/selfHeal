import { StyleSheet, Text, View } from "react-native";
import AuthenticationForm from "../components/authentication/AuthenticationForm";
import Card from "../components/ui/Card";
import { AuthContext } from "../store/auth-context";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Authentication() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  function submitHandler(userDetails) {
    authCtx.validateCredentials(userDetails);
  }

  function cancelHandler() {
    authCtx.resetState();
  }

  useEffect(() => {
    // console.log("--", authCtx.authState);
    if (authCtx.authState.isAuthenticated)
      navigation.navigate("languageSelector");
  }, [authCtx]);

  return (
    <View style={styles.authScreen}>
      <Card title="Welcome to Multilinguify">
        <AuthenticationForm onSubmit={submitHandler} onCancel={cancelHandler} />
        <MaterialCommunityIcons name="meditation" size={24} color="black" />
      </Card>
    </View>
  );
}

export default Authentication;

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    flexDirection: "column",
    marginTop: 120,
  },
});
