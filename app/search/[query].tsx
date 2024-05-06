import { View, Text, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'


import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import {  searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'


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


const Search = () => {
  const { query } = useLocalSearchParams()
  const [ singleQuery, setSingleQuery ] = useState("")
  const { data: posts, refetch, isLoading } = useAppwrite( ()=> searchPosts(query))
  
  useEffect(()=>{
    if( typeof query === "string"){
    setSingleQuery(query)
    }
  }, [query])

  useEffect(()=>{
    refetch()
  }, [query])

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
          <View className=' flex-row items-center mb-5'>
            <View className=' w-full'>
              <Text className=' text-2xl text-gray-400'>Search Result</Text>
              <Text className=' text-3xl text-white font-psemibold'>{query}</Text>
              <View className=' mt-5 mb-8'>
                <SearchInput initialQuery={singleQuery}/>
              </View>
            </View>
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

export default Search