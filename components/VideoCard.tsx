import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'

import { AppwriteVideo } from '../lib/types'
import { icons } from '../constants';

interface VideoCardProps {
    post : AppwriteVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ post : { title, thumbnail, video , creator: { username , avatar}} }) => {

    const [play , setPlay] = useState(false)

  return (
    <View className=' flex-col mb-10 items-center px-4 '>
        <View className=' flex-row gap-3 items-start'>
            <View className=' justify-center items-center flex-row px-4'>
                {/* user Avatars logo */}
                <View className=' w-[46px] h-[46px] border border-secondary-200 justify-center items-center p-0.5 rounded-xl'>
                    <Image source={{ uri: avatar }}
                    className=' w-full h-full rounded-lg'
                    resizeMode='cover'
                    />
                </View>

                <View className=' justify-center flex-1  gap-y-1 ml-3 '>
                    <Text className=' text-white font-psemibold text-sm' numberOfLines={1}>{title}</Text>
                    <Text className=' text-gray-100 text-xs font-pregular' numberOfLines={1}>{ username }</Text>
                </View>
            </View>

            {/* menu icon */}
            <View className='pt-2 mr-3'>
                <Image source={icons.menu} className=' w-5 h-5' resizeMode='contain'/>
            </View>
        </View>

        {/* video thumbnail */}
        {
            play ?
            (
               <Text className=' text-white'>Playing..</Text> 
            )
            :
            (
                <TouchableOpacity
                className='w-full h-60 rounded-lg relative mt-3 justify-center items-center'
                activeOpacity={0.7}
                onPress={()=> setPlay(true)}
                >
                    <Image source={{ uri: thumbnail }}
                    className=' w-full h-full rounded-xl mt-3'
                    resizeMode='cover'
                    />
                    <Image
                     source={icons.play}
                     className=' w-12 h-12 absolute'
                     resizeMode='contain'
                    />
                </TouchableOpacity>
            )
        }
    </View>
  )
}

export default VideoCard