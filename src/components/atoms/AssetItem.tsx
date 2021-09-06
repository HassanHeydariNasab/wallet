import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Asset} from '@store/assets/assets.model';
import {Colors} from '@styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AssetItemProps {
  asset: Asset;
}
export const AssetItem = ({
  asset: {balance, symbol, name, value},
}: AssetItemProps) => {
  return (
    <View style={styles.container}>
      <Icon name="bitcoin" style={styles.icon} size={24} />
      <View style={styles.symbolAndNameContainer}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.balanceAndValueContainer}>
        <Text style={styles.balance}>{balance}</Text>
        <Text style={styles.value}>$ {value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: 18,
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  icon: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  symbolAndNameContainer: {
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  symbol: {
    fontWeight: '500',
  },
  name: {
    color: Colors.MEDIUM_GRAY,
    marginTop: 4,
  },
  balanceAndValueContainer: {
    alignItems: 'flex-end',
  },
  balance: {
    fontWeight: '500',
  },
  value: {
    color: Colors.MEDIUM_GRAY,
    marginTop: 4,
  },
});
