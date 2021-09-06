import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Asset} from '@store/assets/assets.model';
import {Colors} from '@styles/colors';

interface AssetCardProps {
  asset: Asset;
}
export const AssetCard = ({
  asset: {balance, symbol, value},
}: AssetCardProps) => {
  return (
    <LinearGradient
      colors={['#ce9dd3', '#9da2fe', '#6ce3fe', '#6ce3fe', '#45b5fc']}
      angle={70}
      useAngle
      style={styles.container}>
      <Text style={styles.title}>Equity Value</Text>
      <View style={styles.balanceAndNameContainer}>
        <Text style={styles.balance}>{balance}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
      <Text style={styles.value}>$ {value}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 184,
    padding: 24,
    marginHorizontal: 8,
  },
  title: {
    color: Colors.WHITE + '88',
  },
  balanceAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.WHITE,
    marginVertical: 4,
  },
  symbol: {
    backgroundColor: Colors.WHITE,
    color: Colors.PURPLE,
    fontSize: 10,
    fontWeight: '500',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
    marginLeft: 8,
    marginTop: 4,
  },
  value: {
    color: Colors.WHITE,
    fontWeight: '500',
  },
});
