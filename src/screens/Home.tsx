import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, ImageBackground, Pressable, Alert} from 'react-native';
import { getGamesFromFirebase } from '../service/getGamesFromFirebase';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../routes/StackNavigator';
import { Searchbar, ToggleButton } from 'react-native-paper';
import { searchQueryData } from '../service/searchQuery';

export const Home = () => {

  const [games, setGames] = useState<Record<any, string>[]>([])
  const [searchRes, setSearchRes] = useState<Record<any, string>[]>([])
  const [isSearch, setIsSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigatio = useNavigation<NavigationProp<RootStackParams>>()

  useEffect(() => {

    try {

      getGamesFromFirebase().then(setGames)
    } catch (error) {
      Alert.alert("error en la consulta")
    }
    

  },[])

  useEffect(() => {

    if (searchQuery !== "") {
      setIsSearch(true)
    }else{
      setIsSearch(false)
    }
   

  },[searchQuery])

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
        
          placeholder='Search'
          onChangeText={e => {
            setSearchQuery(e)
            searchQueryData(e).then(setSearchRes)
          }}
          value={searchQuery}
        />
        {/* <ToggleButton icon="format-align-right" value="right" /> */}
      </View>
      <FlatList 
        data={!isSearch ? games : searchRes}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigatio.navigate("game", {paramURL: item.id})}
            style={styles.itemContainer}
          >
            <View style={styles.contentGame}>
              <ImageBackground
                source={{uri: item.image}}
                resizeMode='cover'
                style={styles.background}
              >
                {/* {console.log(item.name.length)} */}
                <Text style={styles.title}>{item.title}</Text>
              </ImageBackground>
            </View>
          </Pressable>
        )}
      />
    </View>
  );

};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    // Ajustar el ancho del item para manejar dos columnas
    maxWidth: '48%',
  },
  contentGame: {
    flex: 1,
    aspectRatio: 1, // Mantiene la relación de aspecto cuadrada
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000",
    textShadowColor: "#f1f1f1",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 30,
  },
  row: {
    flexDirection: "row"
  }
});