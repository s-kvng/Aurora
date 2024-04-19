import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'

const Home = () => {
  return (
    <SafeAreaView className=' bg-primary'>
      <FlatList
      data={[{ id : 1}, { id : 2}, { id : 3}]}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({item})=>(
        <View>
          <Text className=' text-3xl '>{item.id}</Text>
        </View>
      )}
      ListHeaderComponent={()=>(
        <View className='my-5 px-4 space-y-6'>
          <View className=' flex-row justify-between items-center mb-5'>
            <View className=' '>
              <Text className=' text-2xl text-gray-400'>Welcome Back</Text>
              <Text className=' text-3xl text-white font-psemibold'>Kvng</Text>
            </View>
            <Image source={images.logoSmall} className=' w-8 h-9' resizeMode='contain'/>
          </View>
          <View>
            <SearchInput/>

            {/*  */}
            <View className=' flex-1 w-full pt-5 pb-8'>
            <Text className='text-lg text-gray-300 font-pregular mb-3'>Lastes Videos</Text>
            </View>
          </View>
        </View>
      )}
      />
    </SafeAreaView>
  )
}

export default Home