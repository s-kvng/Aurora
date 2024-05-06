import { View, Text, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'


interface AppwriteVideo {
  // System-generated fields
  "$collectionId": string;
  "$createdAt": string;
  "$databaseId": string;
  "$id": string;
  "$permissions": string[]; // Assuming it's an array of strings
  "$updatedAt": string;

  // Video-specific fields
  creator: Creator;
  prompt: string;
  thumbnail: string;
  title: string;
  video: string;
}

interface Creator {
  "$collectionId": string;
  "$createdAt": string;
  "$databaseId": string;
  "$id": string;
  "$permissions": string[]; // Assuming it's an array of strings
  "$updatedAt": string;

  accountId?: string; // Optional field
  avatar: string;
  email: string;
  username: string;
}


const Home = () => {
  const { user} = useGlobalContext();
  const { data: posts, refetch, isLoading } = useAppwrite(getAllPosts)
  const { data: latestPosts } = useAppwrite(getLatestPosts)
  

  const [refreshing , setRefreshing] = useState(false)

  const onRefresh = async () =>{
    setRefreshing(true)
        // setTimeout(() => {
        //   setRefreshing(false)
        // }, 2000)
      // re-call vidoes -> if any new vidoes appeared
      await refetch()
      setRefreshing(false)
  }

  console.log("posts -> ", posts,"\n")
  return (
    <SafeAreaView className=' bg-primary h-full'>
      <FlatList
      data={posts}
      keyExtractor={(item)=> item.$id}
      renderItem={({item})=>(
        <View>
        <VideoCard post={item}/>
        </View>
      )}
      ListHeaderComponent={()=>(
        <View className='my-5 px-4 space-y-6'>
          <View className=' flex-row justify-between items-center mb-5'>
            <View className=' '>
              <Text className=' text-2xl text-gray-400'>Welcome Back,</Text>
              <Text className=' text-3xl text-white font-psemibold'>{user?.username}</Text>
            </View>
            <Image source={images.logoSmall} className=' w-8 h-9' resizeMode='contain'/>
          </View>
          <View>
            <SearchInput/>

            {/* lastest vidoes section  */}
            <View className=' flex-1 w-full pt-5 pb-8'>
            <Text className='text-lg text-gray-300 font-pregular mb-3'>Lastes Videos</Text>
            <Trending posts={latestPosts}/>
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