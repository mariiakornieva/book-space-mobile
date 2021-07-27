import React from 'react';
import PropTypes, { number } from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

export function Button({ label, size, style, primary }) {
  const buttonTypeStyles = primary ? styles.primaryButton : styles.secondaryButton;
  const labelTypeStyles = primary ? styles.primaryLabel : styles.secondaryLabel;

  return (
    <View style={{
      ...styles.button,
      ...buttonTypeStyles,
      ...style,
      width: size.width,
      height: size.height,
    }}>
      <Text style={{
        ...styles.label,
        ...labelTypeStyles,
      }}
      >
        {label}
      </Text>
    </View>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  style: PropTypes.shape({
    marginBottom: number,
  }),
  primary: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  style: {},
  primary: false,
};

const styles = StyleSheet.create({
  button: {
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontFamily: 'RhodiumLibre',
  },
  primaryButton: {
    backgroundColor: '#846E63',
    borderWidth: 0,
  },
  primaryLabel: {
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  secondaryLabel: {
    color: '#846E63',
  },
});
