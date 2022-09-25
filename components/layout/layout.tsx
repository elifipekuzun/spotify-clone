import React, {PropsWithChildren} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>{children}</View>
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
