import { View, Text } from 'react-native'
import React from 'react'


interface FormProps {
  title : string;
  value : string;
  handleChangeText : () => void;
  otherStyles? : string;
  keyBoardType : string;
}

const FormField = ({ title, value , handleChangeText , otherStyles, keyBoardType}: FormProps) => {
  return (
    <View className=' space-y-2'>
      <Text className=' text-base text-gray-100'>FormField</Text>
    </View>
  )
}

export default FormField