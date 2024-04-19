import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface TrendingProps{
    posts : [{id : number}, {id : number}, {id : number}];
}

const Trending : React.FC<TrendingProps> = ({posts}) => {
  return (
    <View>
      <FlatList
      data={posts}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item})=>(
        <View>
          <Text className='text-lg text-gray-300 font-pregular mb-3'>{item.id}</Text>
        </View>
      )}
      horizontal
      />
    </View>
  )
}

export default Trending