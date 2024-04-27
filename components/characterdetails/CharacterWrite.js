import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";

import { GlobalStyles } from "../../constants/colors";
import Card from "../ui/Card";
import IconButton from "../ui/IconButton";

function CharacterWrite({ onSubmit }, ref) {
  const [hasDrawn, setHasDrawn] = useState(true);
  useImperativeHandle(ref, () => ({
    resetCanvas() {
      setHasDrawn(true);
      canvasRef.current?.reset();
    },
  }));

  const canvasRef = useRef(null);

  function resetHandler() {
    setHasDrawn(true);
    canvasRef.current?.reset();
  }

  function undoHandler() {
    setHasDrawn(true);
    canvasRef.current?.undo();
  }

  function submitHandler() {
    if (canvasRef.current.toPoints().length === 0) {
      setHasDrawn(false);
      return;
    }

    const encodedImage = canvasRef.current?.toBase64(3);
    onSubmit(encodedImage);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!hasDrawn && (
        <Text style={styles.errorText}>Please Draw Before Submitting!</Text>
      )}
      <SketchCanvas
        ref={canvasRef}
        strokeColor={GlobalStyles.colors.huskyPurple}
        strokeWidth={16}
        containerStyle={styles.canvas}
      />

      <Card cardStyle={styles.buttons}>
        <IconButton
          icon={"arrow-undo-circle"}
          color={GlobalStyles.colors.huskyGold}
          size={36}
          onPress={undoHandler}
        />
        <IconButton
          icon={"trash-sharp"}
          color={GlobalStyles.colors.huskyGold}
          size={36}
          onPress={resetHandler}
        />
        <IconButton
          icon={"send"}
          color={GlobalStyles.colors.huskyGold}
          size={36}
          onPress={submitHandler}
        />
      </Card>
    </SafeAreaView>
  );
}

export default forwardRef(CharacterWrite);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginBottom: 36,
    borderColor: GlobalStyles.colors.huskyPurple,
    borderWidth: 2,
    borderRadius: 4,
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    margin: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  canvas: {
    flex: 1,
  },
});
