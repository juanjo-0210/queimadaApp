import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IconButton, TextInput } from 'react-native-paper'
import { Icon } from '../components/Icon'
interface Message {
  text: string;
  date: string;
}

export const ChatScreen = () => {

  const [text, setText] = useState("")
  const [message, setMessage] = useState<Message[]>([])
  console.log(message)

  return (
    <><ScrollView>
    <View style={styles.chatContainer}>
      
        <FlatList 
          data={message}
          renderItem={({item}) => (
            <View>
              <Text style={{color: "black"}}>{item.text}</Text>
            </View>
          )}
        />

      
      
    </View></ScrollView>
    <View style={styles.writeBox}>
        <TextInput 
          outlineColor='#f49230'
          onChangeText={setText}
          value={text}
          style={{width:"90%"}}
        />
        <IconButton
          icon={() => <Icon name="send" />}
          onPress={() => {
            setMessage([...message, {text: text, date: "111"}])
            setText("")
          }}
        />
    </View></>
  )
}


const styles = StyleSheet.create({
  chatContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    alignContent: "flex-end"
  },
  writeBox: {
    display:"flex",
    flexWrap: "nowrap",
    flexDirection: "row"
  }
})