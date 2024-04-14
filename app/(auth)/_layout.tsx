
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        {/* sign in screen */}
        <Stack.Screen options={{
          headerShown: false
        }} name="sign-in"   />

        {/* sign up screen */}
         <Stack.Screen options={{
          headerShown: false
        }} name="sign-up"   />
      </Stack>

      <StatusBar 
        backgroundColor='#161622'
        style='light' 
      />
    </>
  )
}

export default AuthLayout
