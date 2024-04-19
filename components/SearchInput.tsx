import { View, Text, TextInput, KeyboardTypeOptions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';


interface FormProps {
  title? : string;
  value? : string;
  handleChangeText? : (value : string) => void;
  otherStyles? : string;
  keyBoardType? : KeyboardTypeOptions;
  placeholder? : string;
}

const SearchInput : React.FC<FormProps> = ({ title, value , handleChangeText , otherStyles, keyBoardType, placeholder}) => {

  const [ showPassword, setShowPassword ] = useState<boolean>(false)

  return (


      <View className=' bg-black-100 w-full h-14 px-4 
      border border-black-200 rounded-2xl 
      focus:border-secondary items-center flex-row space-x-4'>

        <TextInput
        className=' flex-1 text-white font-pregular text-base  py-1'
        placeholder={"Search for a video topic"} 
        placeholderTextColor={"#7b7b8b"}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyBoardType}
        secureTextEntry={title === "Password" && !showPassword}
        />

          <TouchableOpacity onPress={()=>console.log("Search")}>
            <Image source={icons.search} className=' w-5 h-5' resizeMode='contain'/>

          </TouchableOpacity>
      
      </View>
  )
}

export default SearchInput