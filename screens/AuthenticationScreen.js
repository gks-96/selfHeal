import { StyleSheet, Text, View } from "react-native";
import AuthenticationForm from "../components/authentication/AuthenticationForm";
import Card from "../components/ui/Card";
import { AuthContext } from "../store/auth-context";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";

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
      <FontAwesome5
        name="heart"
        style={{ alignSelf: "center" }}
        size={50}
        color={GlobalStyles.colors.huskyPurple}
      />
      <Card title="Welcome to Self Love ">
        <AuthenticationForm onSubmit={submitHandler} onCancel={cancelHandler} />
      </Card>
      <MaterialIcons
        style={{ alignSelf: "center" }} // Aligns the icon horizontally to the center
        name="self-improvement"
        size={200}
        color={GlobalStyles.colors.huskyGold}
      />
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
