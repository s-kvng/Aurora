import { Text, View, ScrollView, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar as status } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [ form , setForm] = useState({
    email : "",
    password: "",
    username : "",
  })
  const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

  // 
  const onSubmit = () => {
    createUser()
  }

  return (
    <SafeAreaView className={` bg-primary h-full pt-[${status.currentHeight}] `}>
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
          <View className=' w-full h-[83vh] justify-center px-4 py-6'>
          <Image
            source={images.logo}
            className='w-[134px] h-[84px]'
            resizeMode='contain'
            />
            <Text className=' text-3xl font-psemibold text-gray-100'>Sign Up to Aora </Text>

          <View className=' mt-2'>
            <FormField
            title="Username"
            placeholder='Enter your unique username'
            value={form.username}
            handleChangeText={(e) => {
              setForm({
              ...form,
                username: e
              })
            }}
            otherStyles='mt-6'
            />

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
            otherStyles='mt-6'
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
            otherStyles=' mt-6'
            />

          </View>

            

            <CustomButton title='Sign Up' 
            handlePress={onSubmit} 
            isLoading={isSubmitting} 
            containerStyles='mt-7'  
            />

            <View className='flex flex-row justify-center items-center pt-5 gap-2'>
                        <Text className='text-lg font-pregular text-center text-gray-100'>
                        Already have an account?
                        </Text>
                        <Link href={"/sign-in"} className=' text-lg text-secondary-200 font-psemibold'>Sign in</Link>
              </View>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignUp
