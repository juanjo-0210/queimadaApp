
import React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'

interface Props {
  name: string,
  size?: number,
  color?: string
}
export const Icon = ({name, size=30, color = "#000"}:Props) => {
  return <Icons name={name} size={size} color={color} />
};
