import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '@styles/colors';

interface HeaderProps {
  title?: string;
  Right?: any;
}

export const Header = ({title, Right}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.BACKGROUND}
      />
      <Text style={styles.title}>{title}</Text>
      {Right ? Right : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 24,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
  },
});
