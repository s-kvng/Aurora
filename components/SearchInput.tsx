import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { router, usePathname } from 'expo-router';

import { icons } from '../constants';


interface SearchProps {
  initialQuery?: string;
}

const SearchInput : React.FC<SearchProps> = ({ initialQuery}) => {
  const pathname = usePathname()
  const [ query , setQuery ] = useState<string>(initialQuery || "")

  return (


      <View className=' bg-black-100 w-full h-14 px-4 
      border border-black-200 rounded-2xl 
      focus:border-secondary items-center flex-row space-x-4'>

        <TextInput
          className=' flex-1 text-white font-pregular text-base  py-1'
          placeholder={"Search for a video topic"} 
          placeholderTextColor={"#cdcde0"}
          value={query}
        onChangeText={(e)=> setQuery(e)}
      />

          <TouchableOpacity onPress={()=>
            {
              if (!query) {
                return Alert.alert("Missing query", "Please input something to search results across database")
              }

              if (pathname.startsWith("/search")) {
                router.setParams({ query })
              } else {
                router.push(`/search/${query}`)
              }
            }
          }>
            <Image source={icons.search} className=' w-5 h-5' resizeMode='contain'/>

          </TouchableOpacity>
      
      </View>
  )
}

export default SearchInput