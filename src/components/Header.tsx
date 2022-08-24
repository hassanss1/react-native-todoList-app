import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import logoImg from '../assets/images';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    // paddingHorizontal: ,
    height: 173,
    width: '100%',
  },
});
