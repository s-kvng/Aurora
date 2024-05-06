import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'


import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import {  getUserPosts, searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'
import { icons } from '../../constants'
import InfoBox from '../../components/InfoBox'

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


const Profile = () => {
  const { user, setUser,  setIsLoggedIn} = useGlobalContext();
  console.log("User -> ",user.$id)
  const { data: posts, refetch, isLoading } = useAppwrite( ()=> getUserPosts(user.$id))
  

  const logout = () =>{}

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
       <View className=' w-full justify-center items-center mt-4 mb-12 px-4 '>
        <TouchableOpacity className=' mb-10 w-full items-end m' onPress={logout}>
          <Image source={icons.logout} className=' w-7 h-7' resizeMode='contain'/>
        </TouchableOpacity>
        <View className=' h-16 w-16 border border-secondary 
        rounded-lg justify-center items-center'>
          <Image source={{ uri: user?.avatar }} className=' w-[95%] h-[95%] rounded-lg' resizeMode='cover'/>
        </View>
        <InfoBox
          title={user?.username}
          containerStyles={" mt-5 mb-5"}
          titleStyles={" text-lg"}
        />

        <View className='flex-row '>
        <InfoBox
          title={posts?.length || 0}
          subtitle={"Posts"}
          containerStyles={" mr-6"}
          titleStyles={" text-xl"}
        />
        <InfoBox
          title={"1.2k"}
          subtitle={"Followers"}
          containerStyles={"ml-5"}
          titleStyles={" text-xl"}
        />
        </View>
       </View>
      )}

      ListEmptyComponent={()=>(
        <EmptyState
        title = "No Vidoes found"
        subtitle = "No vidoes found for this search query"
        />
      )}
      // refreshControl={<RefreshControl onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Profile