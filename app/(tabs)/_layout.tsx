import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import { icons } from '../../constants'

interface TabIconProps {
    icon: ImageSourcePropType; // Accommodates various image sources (static or dynamic)
    color?: string; // Optional color prop for potential tinting
    name: string; // Required name for accessibility and potential display
    focus?: boolean; // Optional focus prop for styling adjustments
  }

const TabIcon = ({ icon, color , name , focus }: TabIconProps) =>{
    return (
        <View>
            <Image
            source={icon}
            />
        </View>
    )
}
const TabLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
            name='home' 
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon : ({ color, focused })=>(
                    <TabIcon icon={icons.home} color={color} name="Home" focus={focused}/>
                )
            }} 
            />
        </Tabs>
    </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})