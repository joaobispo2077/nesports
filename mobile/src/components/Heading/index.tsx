import { FunctionComponent } from 'react';
import { View, ViewProps, Text } from 'react-native';

import { styles } from './styles';

export type HeadingProps = {
  title: string;
  subtitle: string;
} & ViewProps;

export const Heading: FunctionComponent<HeadingProps> = ({
  title,
  subtitle,
  ...restProps
}) => {
  return (
    <View style={styles.container} {...restProps}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
