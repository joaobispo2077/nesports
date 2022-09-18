import { GameController } from 'phosphor-react-native';
import { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../styles/themes';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

export type Duo = {
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  useVoicheChannel: boolean;
  hoursStart: string;
  hoursEnd: string;
};

export type DuocardProps = {
  data: Duo;
  onConnect: () => void;
};

export const Duocard: FunctionComponent<DuocardProps> = ({
  data: {
    name,
    yearsPlaying,
    weekDays,
    useVoicheChannel,
    hoursStart,
    hoursEnd,
  },
  onConnect,
}) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={name} />
      <DuoInfo label="Tempo de jogo" value={`${yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays.length} dias \u2022 ${hoursStart} - ${hoursEnd}`}
      />
      <DuoInfo
        label="Chamada de audio?"
        value={`${useVoicheChannel ? 'Sim' : 'Não'}`}
        colorValue={`${
          useVoicheChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }`}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};
