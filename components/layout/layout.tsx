import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

export const Layout: React.FC<
  PropsWithChildren<{style?: StyleProp<ViewStyle>}>
> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.screen, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.9,
  },
  screen: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: '5%',
    marginBottom: '15%',
  },
});
