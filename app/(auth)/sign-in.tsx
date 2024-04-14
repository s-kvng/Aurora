import { Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {

  const [ form , setForm] = useState({
    email : "",
    password: "",
  })

  return (
    <SafeAreaView className=' bg-primary h-full '>
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <View className=' w-full h-full justify-center px-4 py-6'>
        <Image
          source={images.logo}
          className='w-[134px] h-[84px]'
          resizeMode='contain'
          />
          <Text className=' text-3xl font-psemibold text-gray-100'>Sign in to Aora </Text>

        <FormField
        title="Email"
        value={form.email}
        handleChangeText={() => {}}
        otherStyles=' mt-7'
        keyBoardType='email-address'
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
