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
        <View className=' items-center justify-center gap-1'>
            <Image
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='w-6 h-6'
            />
            <Text className={` ${ focus ? " font-psemibold" : "font-pregular"} text-xs`} style={{ color : color}}>
                {name}
            </Text>
        </View>
    )
}
const TabLayout = () => {
  return (
    <>
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarStyle : {
                backgroundColor: "#161622",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                height: 84,
            }
                        
        }}>
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

        <Tabs.Screen 
            name='bookmark' 
            options={{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon : ({ color, focused })=>(
                    <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focus={focused}/>
                )
            }} 
            />

<Tabs.Screen 
            name='create' 
            options={{
                title: 'Create',
                headerShown: false,
                tabBarIcon : ({ color, focused })=>(
                    <TabIcon icon={icons.plus} color={color} name="Create" focus={focused}/>
                )
            }} 
            />

<Tabs.Screen 
            name='profile' 
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon : ({ color, focused })=>(
                    <TabIcon icon={icons.profile} color={color} name="Profile" focus={focused}/>
                )
            }} 
            />
        </Tabs>
    </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})