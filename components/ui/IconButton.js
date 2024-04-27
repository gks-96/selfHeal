import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress, size }) {
  const iconSize = size || 48;
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={iconSize} color={color} />
    </Pressable>
  );
}

export default IconButton;
