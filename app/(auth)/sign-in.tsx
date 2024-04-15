import { Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [ form , setForm] = useState({
    email : "",
    password: "",
  })
  const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

  // 
  const onSubmit = () => {}

  return (
    <SafeAreaView className=' bg-primary h-full '>
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <View className=' w-full h-[83vh] justify-center px-4 py-6'>
        <Image
          source={images.logo}
          className='w-[134px] h-[84px]'
          resizeMode='contain'
          />
          <Text className=' text-3xl font-psemibold text-gray-100'>Sign in to Aora </Text>

          <FormField
          title="Email"
          placeholder='Enter your email address'
          value={form.email}
          handleChangeText={(e) => {
            setForm({
            ...form,
              email: e
            })
          }}
          otherStyles=' mt-10'
          keyBoardType='email-address'
          />

<FormField
          title="Password"
          placeholder='Enter your password'
          value={form.password}
          handleChangeText={(e) => {
            setForm({
            ...form,
              password: e
            })
          }}
          otherStyles=' mt-7'
          />

          <View className=' mt-6'>
            <TouchableOpacity>
              <Text className='text-gray-500 text-base font-psemibold text-right'>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <CustomButton title='Log in' 
          handlePress={onSubmit} 
          isLoading={isSubmitting} 
          containerStyles='mt-6'  
          />

          <View className='flex flex-row justify-center items-center pt-5 gap-2'>
                      <Text className='text-lg font-pregular text-center text-gray-100'>
                      Dont have an account?
                      </Text>
                      <Link href={"/sign-up"} className=' text-lg text-secondary-200 font-psemibold'>Sign Up</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
