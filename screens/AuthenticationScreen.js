import { StyleSheet, View } from "react-native";
import { useContext, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import AuthenticationForm from "../components/authentication/AuthenticationForm";
import Card from "../components/ui/Card";
import { AuthContext } from "../store/auth-context";
import { GlobalStyles } from "../constants/colors";
import IconButton from "../components/ui/IconButton";

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
      <View style={styles.iconContainer}>
        <IconButton
          icon={"heart-outline"}
          size={80}
          color={GlobalStyles.colors.huskyPurple}
          onPress={() => {}}
        />
      </View>

      <Card title="Welcome to SelfHeal App ">
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
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
});
