import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`p-5`}>    
        <Image 
            style={{
                width:100, height:100, resizeMode:"contain"
            }}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})