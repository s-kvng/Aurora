import { View, Text } from 'react-native'
import React from 'react'


interface InfoBoxProps {
    title: string | number ;
    containerStyles?: string;
    titleStyles?: string;
    subtitle?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title , containerStyles, titleStyles, subtitle}) => {
  return (
    <View className={containerStyles}>
      <Text className={` text-white text-center font-psemibold ${titleStyles}`}>{title}</Text>
      <Text className={` text-white text-center text-sm font-pregular`}>
        {subtitle}
      </Text>
    </View>
  )
}

export default InfoBox