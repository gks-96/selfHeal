import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Card({ title, children, cardStyle }) {
  let cardStyles = [styles.cardContainer];
  if (cardStyle) {
    cardStyles.push(cardStyle);
  }

  return (
    <View style={cardStyles}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: GlobalStyles.colors.huskyPurple,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 16,
    textAlign: "center",
  },
});
