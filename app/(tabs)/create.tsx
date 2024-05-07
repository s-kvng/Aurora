import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React , { useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { Video, ResizeMode } from 'expo-av'
import { Image } from 'react-native'
import * as DocumentPicker from "expo-document-picker"

import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'


interface formTypes {
  title : string;
  video : DocumentPicker.DocumentPickerAsset | null ;
  thumbnail : DocumentPicker.DocumentPickerAsset | null;
  prompt : string;
}

const Create = () => {
  const [ uploading , setUploading ] = useState<boolean>(false)
  const [ form , setForm ] = useState<formTypes>({
    title: "",
    video : null,
    thumbnail : null,
    prompt : ""
  })

  const openPicker = async (selectType: string) =>{
    const result = await DocumentPicker.getDocumentAsync({
      type: selectType === "image" ? 
      ["image/png", "image/jpeg", "image/jpg"]: ["video/mp4", "video/gif"]
    })

    if(!result.canceled){
      if(selectType === "image"){
        setForm({
         ...form,
          thumbnail: result.assets[0]
        })
      }
      
      if(selectType === "video"){
        setForm({
         ...form,
          video: result.assets[0]
        })
      }
    }
    else{
      setTimeout(()=>{
        Alert.alert("Document picked", JSON.stringify(result,null, 2))
      }, 100)
    }
  }

  // 
  const handleSubmit = async () => {
    if(!form.title || !form.prompt || !form.thumbnail || !form.video){
      return Alert.alert("Fields Required","Please fill or values")
    }

    setUploading(true)

    try {
      
      Alert.alert("Success", "Post Uploaded successfully")
      router.push("/home")
    } catch (error: any) {
      Alert.alert("Error", error.message)
    }finally {
      setForm({
        title: "",
        video : null,
        thumbnail : null,
        prompt : ""
      })
      setUploading(false)
    }
  }


  return (
    <SafeAreaView className=' bg-primary h-full'>
      <ScrollView className=' px-3 my-6'>
        <Text className=' text-2xl text-white font-psemibold'>Upload Video</Text>

        <FormField
          title='Video Title'
          value={ form.title}
          handleChangeText={(e)=>{ setForm({...form, title: e})}}
          otherStyles='mt-10'
          keyBoardType='default'
          placeholder='Title'
        />

        <View className=' mt-7 space-y-2'>
          <Text className=' text-base text-gray-100 font-pmedium'>Upload Video</Text>
          <TouchableOpacity onPress={()=>openPicker("video")}>
            { form.video ? 
              <Video
                source={{ uri: form.video.uri}}
                className=' h-64 w-full rounded-2xl'
                resizeMode={ResizeMode.COVER}
                useNativeControls={true}
                isLooping
              /> 
              : 
              <View className=' w-full h-40 bg-black-100 rounded-2xl justify-center items-center'>
                <View className='w-14 h-14 border border-dashed border-secondary-100 
                justify-center items-center'>
                  <Image
                  source={icons.upload} 
                  className='w-1/2 h-1/2'
                  resizeMode='contain'
                  />
                </View>
              </View>  
          }
          </TouchableOpacity>
        </View>

        <View className=' mt-7 space-y-2'>
          <Text className=' text-base text-gray-100 font-pmedium'>Thumbnail Image</Text>
          <TouchableOpacity onPress={()=>openPicker("image")}>
              { form.thumbnail ? 
                <Image
                source={{ uri: form.thumbnail.uri}}
                className=' h-64 w-full rounded-2xl'
                resizeMode="cover"
                />
                : 
                (
                  <View className=' w-full h-16 px-4 bg-black-100 rounded-2xl justify-center 
                  items-center border-2 border-black-200 flex-row space-x-2'>                
                    <Image
                    source={icons.upload} 
                    className='w-5 h-1/2'
                    resizeMode='contain'
                    />
                    <Text className=' text-gray-100 text-sm font-pmedium'>Choose a file</Text>
                  </View>  
                )
            }
          </TouchableOpacity>
        </View>

        <FormField
          title='AI Prompt'
          value={ form.prompt}
          handleChangeText={(e)=>{ setForm({...form, prompt: e})}}
          otherStyles='mt-10'
          placeholder=' Prompt you used to create this video'
          />

          <CustomButton 
          title='Submit'
          handlePress={()=>{}}
          containerStyles=' mt-10'
          textStyles=' text-white font-psemibold'
          isLoading={false}
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create