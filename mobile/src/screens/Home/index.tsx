import { FunctionComponent } from 'react';
import { Image, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
    </View>
  );
};
