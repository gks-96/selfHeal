import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { GlobalStyles } from "../../constants/colors";

function Banner({ bannerResponse }) {
  const [message, setMessage] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    let message = "";
    if (bannerResponse) {
      if (bannerResponse.error) {
        message = "Try Again ! " + bannerResponse.error;
        setMessage(message);
        setIcon("alert-circle");
      } else {
        const accuracy = (bannerResponse.percentageAccuracy * 100).toFixed(2);
        if (accuracy < 60) {
          message = "Try Again ! Your Accuracy is very less !";
          setMessage(message);
          setIcon("alert-circle");
        } else {
          message = "Good Job!, Your Accuracy is " + accuracy + "%";
          setMessage(message);
          setIcon("checkmark-circle");
          setAccuracy(accuracy);
        }
      }
    }
  }, [bannerResponse]);

  return (
    <>
      <Card
        cardStyle={[
          styles.cardStyle,
          accuracy < 60 ? styles.cardRed : styles.cardGreen,
        ]}
      >
        <View style={styles.iconContainer}>
          <IconButton
            size={22}
            color={accuracy < 60 ? "red" : "green"}
            icon={icon}
          />
          <Text style={styles.iconContainerText}>{message}</Text>
        </View>

        {/* {accuracy && <Text style={styles.text}>Accuracy: {accuracy} %</Text>} */}
      </Card>
    </>
  );
}

export default Banner;

const styles = StyleSheet.create({
  cardStyle: {
    // zIndex: 1,
    // shadowColor: "black",
    // shadowRadius: 6,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardGreen: {
    // backgroundColor: "green",
    // borderColor: "green",
    backgroundColor: GlobalStyles.colors.huskyGold,
    borderColor: GlobalStyles.colors.huskyGold,
  },
  cardRed: {
    // backgroundColor: "red",
    // borderColor: "red",
    backgroundColor: GlobalStyles.colors.huskyGold,
    borderColor: GlobalStyles.colors.huskyGold,
  },
  iconContainerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 6,
  },
  text: {
    color: "black",
  },
});

// function createBannerResponse(response) {
//     if (response.error) {
//       return {
//         color: "red",
//         message: "Try Again !",
//       };
//     } else {
//       if (accuracy < 60) {
//         return {
//           color: "red",
//           message: "Try Again !",
//         };
//       } else {
//         return {
//           color: "green",
//           message: "Good Job!",
//           accuracy,
//         };
//       }
//     }
//   }
