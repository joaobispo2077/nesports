import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { THEME } from '../../styles/themes';
import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} size="large" />
    </View>
  );
};
