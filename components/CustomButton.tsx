import { TouchableOpacity, Text } from 'react-native'
import React from 'react'


interface ButtonProps{
    title : string;
    handlePress : () => void;
    isLoading? : boolean;
    containerStyles?: string;
    textStyles?: string;
}

const CustomButton = ({ title , handlePress, isLoading, containerStyles,textStyles   }: ButtonProps) => {
  return (
    <TouchableOpacity 
    className={` bg-secondary-200 rounded-xl min-h-[62px]
     justify-center items-center ${containerStyles} ${isLoading && "opacity-50"}`} 
    onPress={handlePress} 
    activeOpacity={0.7}
    disabled={isLoading}
    >
        <Text className={`text-primary text-lg font-psemibold ${ textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
