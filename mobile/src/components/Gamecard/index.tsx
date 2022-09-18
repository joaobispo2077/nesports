import { LinearGradient } from 'expo-linear-gradient';
import { FunctionComponent } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { THEME } from '../../styles/themes';
import { styles } from './styles';

export type GamecardProps = {
  title: string;
  ads: number;
  image: string;
};

type Props = {
  data: GamecardProps;
} & TouchableOpacityProps;

export const Gamecard: FunctionComponent<Props> = ({
  data: { title, ads, image },
  ...restProps
}) => {
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      <ImageBackground source={{ uri: image }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
