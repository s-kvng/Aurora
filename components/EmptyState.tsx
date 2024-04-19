import { View, Text, Image } from 'react-native'
import { router } from 'expo-router';
import React from 'react'

import { images } from '../constants';
import CustomButton from './CustomButton';

interface EmptyStateProps {
    title : string;
    subtitle : string;
}

const EmptyState : React.FC<EmptyStateProps> = ({title , subtitle}) => {
  return (
    <View className=' justify-center items-center px-3'>
        <Image source={images.empty} className='h-[215px] w-[270px]' resizeMode='contain'/>
        <Text className=' text-xl mt-2 text-white font-psemibold'>{title}</Text>
        <Text className=' text-sm font-pmedium text-gray-400'>{subtitle}</Text>

        <CustomButton
        title='Create video'
        handlePress={()=> router.push('/create')}
        containerStyles='w-full my-5'
        isLoading={false}
        />
    </View>
  )
}

export default EmptyState