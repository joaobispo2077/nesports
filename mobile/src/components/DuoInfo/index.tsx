import { FunctionComponent } from 'react';
import { View, Text, ColorValue } from 'react-native';

import { THEME } from '../../styles/themes';
import { styles } from './styles';

export type DuoInfoProps = {
  label: string;
  value: string;
  colorValue?: ColorValue;
};

export const DuoInfo: FunctionComponent<DuoInfoProps> = ({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: colorValue }]}>{value}</Text>
    </View>
  );
};
