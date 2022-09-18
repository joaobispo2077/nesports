import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ads } from '../screens/Ads';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="ads" component={Ads} />
    </Navigator>
  );
};
