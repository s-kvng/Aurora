import { View, Text, TextInput, KeyboardTypeOptions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';


interface FormProps {
  title? : string;
  value : string;
  handleChangeText : (value : string) => void;
  otherStyles? : string;
  keyBoardType? : KeyboardTypeOptions;
  placeholder? : string;
}

const FormField : React.FC<FormProps> = ({ title, value , handleChangeText , otherStyles, keyBoardType, placeholder}) => {

  const [ showPassword, setShowPassword ] = useState<boolean>(false)

  return (
    <View className={` space-y-2 ${otherStyles}`}>
      <Text className=' text-base text-gray-100'>{title}</Text>

      <View className=' bg-black-100 w-full h-16 px-4 
      border border-black-200 rounded-2xl 
      focus:border-secondary items-center flex-row '>

        <TextInput
        className=' flex-1 text-white font-psemibold text-base '
        placeholder={placeholder} 
        placeholderTextColor={"#7b7b8b"}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyBoardType}
        secureTextEntry={title === "Password" && !showPassword}
        />

        { title === "Password" && 
          <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className=' w-6 h-6' resizeMode='contain'/>

          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default FormField