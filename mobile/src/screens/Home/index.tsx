import { FunctionComponent } from 'react';
import { Image, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Gamecard } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <Gamecard
        data={{
          ads: GAMES[0].ads,
          image: GAMES[0].cover,
          title: GAMES[0].name,
        }}
      />
    </View>
  );
};
