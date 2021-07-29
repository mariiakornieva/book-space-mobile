import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, FONT_FAMILY, TEXT_COLOR } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: TEXT_COLOR,
    fontFamily: FONT_FAMILY,
  },
  header: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  }
});
