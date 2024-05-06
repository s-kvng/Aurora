import { Text, View, ScrollView, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar as status , Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
import { getCurrentUser } from '../../lib/appwrite'

const SignIn = () => {

  const { setUser , setIsLoggedIn } = useGlobalContext()

  const [ form , setForm] = useState({
    email : "",
    password: "",
  })
  const [ isSubmitting , setIsSubmitting ] = useState<boolean>(false)

  // 
  const onSubmit = async () => {

    if(!form.email || !form.password){
     return Alert.alert("Error","Please fill in all required fields !!!")
    }
    setIsSubmitting(true)
    try {
      
      await signIn(form.email, form.password)
      const result = await getCurrentUser()
      
      // set to global state
      setUser(result)
      setIsLoggedIn(true) 
      
      Alert.alert("Success", "User signed in successfully")
      router.replace("/home")

    } catch (error: unknown) {
      console.log("log in error -> ",error)
    }finally {
      setIsSubmitting(false)
    }


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
          </KeyboardAvoidingView>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn
