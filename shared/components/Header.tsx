import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles';

export function Header({ title, backButton, style }) {
  return (
    <View style={[globalStyles.header, style]}>
      {backButton}
      <Text style={globalStyles.text}>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  backButton: PropTypes.node,
};

Header.defaultProps = {
  title: '',
  backButton: null,
};