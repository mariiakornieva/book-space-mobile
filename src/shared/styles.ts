import { StyleSheet } from 'react-native';
import {
  BACKGROUND_COLOR,
  PRIMARY_FONT_FAMILY,
  SECONDARY_FONT_FAMILY,
  TEXT_COLOR,
} from './constants';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: TEXT_COLOR,
    fontFamily: PRIMARY_FONT_FAMILY,
  },
  header: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  pageTitle: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontFamily: PRIMARY_FONT_FAMILY,
  },
  input: {
    color: TEXT_COLOR,
    fontSize: 14,
    fontFamily: SECONDARY_FONT_FAMILY,
    paddingVertical: 8,
    paddingHorizontal: 3,
    borderBottomWidth: 4,
    borderBottomColor: 'rgba(132, 110, 99, .2)',
    marginHorizontal: 40,
    marginBottom: 36,
    width: '100%',
  },
});
