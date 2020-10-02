/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity, ToastAndroid
} from 'react-native';
import {BurgerMenu, BannerSlider, Product} from './components'
import {Home, 
  User, Love, Cart, 
  Home2, Love2, User2, 
  Speatu1, Sepatu2, Sepatu3, 
  Sepatu4, Sepatu5, Crausal3, Crausal2, Crausal1} from './Asset'

  const products = [
    {
      img: Speatu1,
      des: 'Sepatu 1'
    },
    {
      img: Sepatu2,
      des: 'Sepatu 2'
    },
    {
      img: Sepatu3,
      des: 'Sepatu 3'
    },
    {
      img: Sepatu4,
      des: 'Sepatu 4'
    },
    {
      img: Sepatu5,
      des: 'Sepatu 5'
    },
  ]

  const data = [
  {
    img: Crausal1,
    value: 1,
    right: 10,
    left: 10,
    width: 400,
  }, 
  {
    img: Crausal2,
    value: 39,
    right: 10,
    left: 25,
    width: 400,
  },  
  {
    img: Crausal3,
    value: 175,
    left: 20,
    width: 400,
    right: 0
  }]

const App: () => React$Node = () => {
  const [screHome, setScrenHome] = useState(false)
  const [screLove, setScrenLove] = useState(true)
  const [screUser, setScrenUser] = useState(true)
  const [count, setCount] = useState(0);
  const onHome = () => {
    setScrenHome(false)
    setScrenLove(true)
    setScrenUser(true)
  }
  const onLove = () => {
    setScrenLove(false)
    setScrenHome(true)
    setScrenUser(true)
  }
  const onUser = () => {
    setScrenUser(false)
    setScrenLove(true)
    setScrenHome(true)
  }
  
  const onPress = (x) => {
    setCount(() => count + 1);
    ToastAndroid.show(x.des, ToastAndroid.SHORT);
  }

  return (
          <View style={styles.container}>
              <View style={{
                marginTop: 30, 
                margin: 15, 
                flexDirection: 'row', 
                justifyContent: 'space-between'}}>
                <BurgerMenu/>
                <Image source={Cart} style={styles.cart}>
                </Image>
                <View style={{ 
                  height: 25, 
                  width: 25, 
                  borderRadius: 50, 
                  backgroundColor: 'red',
                  position:'absolute',
                  right: -10,
                  top: -10
                  }}>
                    <Text style={{color: 'white', left: 4,top: 2, fontWeight: 'bold'}}>{count}</Text>
                  </View>
              </View>
              <Text style={{marginLeft:15, fontSize: 20, fontWeight: 'bold'}}>Nike App Store</Text>
              <View>
                <BannerSlider itemsPerInterval={3} items={data} style='stats'/>
              </View>
              <View>
                <Product products={products} onPress={onPress}/>
              </View>
              <View style={{
                flexDirection: 'row',
                margin: 15,
                justifyContent: 'space-between',
                bottom: 0,
                alignItems: 'flex-end',
                flex: 1,
                }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={onHome}
                    style={{
                      height: 40,
                      width: 40,
                    }}>
                      {
                        screHome?
                        <Image style={styles.img()} source={Home}></Image>
                        :
                        <Image style={styles.img()} source={Home2}></Image>
                      }
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={onLove}
                    style={{
                      height: 40,
                      width: 40,
                    }}>
                      {
                        screLove?
                        <Image style={styles.img()} source={Love}></Image>
                        :
                        <Image style={styles.img()} source={Love2}></Image>
                      }
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={onUser}
                    style={{
                      height: 40,
                      width: 40,
                    }}>
                      {
                        screUser?
                        <Image style={styles.img()} source={User}></Image>
                        :
                        <Image style={styles.img()} source={User2}></Image>
                      }
                  </TouchableOpacity>
              </View>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    borderTopRightRadius: 250,
  },
  cart: {
    height: 28,
    width: 28,
    position: 'relative'
  },
  img: (type) => ({
    width: 40, 
    height: 40,
  })
});

export default App;
