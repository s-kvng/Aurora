import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, TextStyle, ViewStyle, ImageStyle } from 'react-native'
import * as Animatable from "react-native-animatable"
import { ViewToken } from 'react-native';
import React, { useState } from 'react'

import { AppwriteVideo } from '../lib/types';
import { icons } from '../constants';

interface TrendingProps{
    posts : AppwriteVideo[];
}

interface TrendingItemProps {
  activeItem : String | AppwriteVideo;
  item : AppwriteVideo
}

interface FlatListItem {
  viewableItems : ViewToken[]
}

const zoomIn= {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1
  }
}

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({ activeItem , item}: TrendingItemProps) =>{
  const [ play , setPlay] = useState(false)

  return (
    <Animatable.View className='mr-5' 
    animation={activeItem === item.$id ? zoomIn : zoomOut} 
    duration={500}>
      
      {/* video thumbnail */}
      {
            play ?
            (
               <Text className=' text-white'>Playing..</Text> 
            )
            :
            (
                <TouchableOpacity
                className=' relative justify-center items-center'
                activeOpacity={0.7}
                onPress={()=> setPlay(true)}
                >
                    <ImageBackground source={{ uri: item.thumbnail }}
                    className=' w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
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

    </Animatable.View>
  )
}


const Trending : React.FC<TrendingProps> = ({posts}) => {
  const [ activeItem , setActiveItem] = useState<string | AppwriteVideo>(posts[0])

  const viewableItemsChanged = ({ viewableItems }: FlatListItem) => {
    console.log("view -> ", viewableItems)
    if( viewableItems.length > 0 ) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <View>
      <FlatList
      data={posts}
      keyExtractor={(item) => String(item.$id)}
      renderItem={({item})=>(
        <TrendingItem activeItem={activeItem} item={item}/>
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0}}
      horizontal
      />
    </View>
  )
}

export default Trending