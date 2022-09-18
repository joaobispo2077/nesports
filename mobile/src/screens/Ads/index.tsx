import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Game } from '../../@types/navigation';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Duocard } from '../../components/Duocard';
import { Heading } from '../../components/Heading';
import { THEME } from '../../styles/themes';
import { styles } from './styles';

export type Ad = {
  createdAt: string;
  hoursEnd: string;
  hoursStart: string;
  id: string;
  name: string;
  updatedAt: string;
  useVoicheChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
};

export const Ads: FunctionComponent = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as Pick<Game, 'id' | 'name' | 'bannerUrl'>;

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetch(`http://localhost:3002/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.log(error));
  }, [game.id]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image source={logoImage} style={styles.logo} resizeMode="contain" />

          <View style={styles.rightWindow} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.banner}
          resizeMode="cover"
        />

        <Heading title={game.name} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={ads}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <SafeAreaView style={styles.duoCard}>
              <Duocard data={item} onConnect={() => console.log(item)} />
            </SafeAreaView>
          )}
          style={styles.contentContainerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
};
