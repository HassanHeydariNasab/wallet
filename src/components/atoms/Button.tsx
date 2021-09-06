import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ColorValue,
} from 'react-native';
import {Colors} from '@styles/colors';

interface ButtonProps {
  text: string;
  onPress?: () => void;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  style?: ViewStyle;
}
export const Button = ({
  text,
  onPress,
  backgroundColor,
  textColor,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        backgroundColor ? {backgroundColor} : undefined,
        style,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, textColor ? {color: textColor} : undefined]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    flexGrow: 1,
  },
  text: {
    fontWeight: '600',
    color: Colors.WHITE,
  },
});
