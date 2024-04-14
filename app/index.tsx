import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: "100%"}} >
        <View className='w-full h-full  items-center px-4'>
          <Image
          source={images.logo}
          className='w-[134px] h-[84px]'
          resizeMode='contain'
          />

        <Image
          source={images.cards}
          className='w-full max-w-[380px] h-[300px]'
          resizeMode='contain'
        />

        <View className=' relative mt-5'>
          <Text className=' text-3xl font-bold text-white text-center'>
              Discover Endless Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text> 
          </Text>
          <Image
          source={images.path}
          className='absolute w-[130px] h-[15px] -bottom-2 -right-8'
          resizeMode='contain'
          />
        </View>

        <Text className='text-sm font-pregular text-center text-gray-100 mt-7 '>
          Where Creativity Meets Innovation: 
          embark on a journey of limitless exploration with Aora</Text>
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
