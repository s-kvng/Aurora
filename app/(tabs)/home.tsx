import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

const Home = () => {

  const [refreshing , setRefreshing] = useState(false)

  const onRefresh = () =>{
    setRefreshing(true)
        // setTimeout(() => {
        //   setRefreshing(false)
        // }, 2000)
      // re-call vidoes -> if any new vidoes appeared
      setRefreshing(false)
  }

  return (
    <SafeAreaView className=' bg-primary h-full'>
      <FlatList
      data={[{ id : 1}, { id : 2}, { id : 3}]}
      keyExtractor={(item, index)=> String(item?.id) || index.toString()}
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

            {/* lastest vidoes section  */}
            <View className=' flex-1 w-full pt-5 pb-8'>
            <Text className='text-lg text-gray-300 font-pregular mb-3'>Lastes Videos</Text>
            <Trending posts={[{id: 1}, {id: 2} , {id:3}] ?? []}/>
            </View>
          </View>
        </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title = "No Vidoes found"
        subtitle = "Be the first to upload a video"
        />
      )}
      // refreshControl={<RefreshControl onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home