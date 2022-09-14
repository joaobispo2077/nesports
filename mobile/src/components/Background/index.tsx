import { FunctionComponent, ReactNode } from 'react';
import { ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background-galaxy.png';
import { styles } from './styles';

export interface BackgroundProps {
  children: ReactNode;
}

export const Background: FunctionComponent<BackgroundProps> = ({
  children,
}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};
