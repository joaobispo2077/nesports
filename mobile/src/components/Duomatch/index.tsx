import { MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { CheckCircle } from 'phosphor-react-native';
import { FunctionComponent, useState } from 'react';
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { THEME } from '../../styles/themes';
import { Heading } from '../Heading';
import { styles } from './styles';

export type DuomatchProps = {
  discord: string;
  onClose: () => void;
} & ModalProps;

export const Duomatch: FunctionComponent<DuomatchProps> = ({
  discord,
  onClose,
  ...restProps
}) => {
  const [isCopping, setIsCopping] = useState(false);

  const handleCopyDiscordToClipboard = async () => {
    try {
      setIsCopping(true);

      await Clipboard.setStringAsync(discord);

      Alert.alert(
        'Discord copiado com sucesso!',
        'Agora é só entrar em contato com o usuário.',
      );
    } catch (error) {
      Alert.alert('Erro', ' Não foi possível copiar o Discord.');

      console.log(error);
    } finally {
      setIsCopping(false);
    }
  };

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...restProps}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={24}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} weight="bold" color={THEME.COLORS.SUCCESS} />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar"
            style={styles.heading}
          />

          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
