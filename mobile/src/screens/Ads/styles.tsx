import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 40,
  },
  rightWindow: {
    width: 20,
    height: 20,
  },
  banner: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  duoCard: {
    marginRight: 32,
  },
  contentContainerList: {
    width: '100%',
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  contentEmptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
