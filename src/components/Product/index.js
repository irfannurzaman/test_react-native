import React from 'react'
import {ScrollView, View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

function BannerSlider({products, onPress}) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
        {
          products.map((x, i) => {
            return <View key={i} style={styles.menu}>
              <Image style={{width: 148, 
                height: 160, 
                borderTopLeftRadius: 10, 
                borderTopRightRadius: 10}} source={x.img}></Image>
                <View style={styles.desc}>
                <TouchableOpacity 
                onPress={() => onPress(x)}
                style={{
                  marginLeft: 10,
                  height:18, width: 18,
                  alignItems: 'center',
                  backgroundColor: 'white'}}>
                  <Text style={{fontSize: 20, top: -5}}>+</Text>
                </TouchableOpacity>
                  <Text style={{margin: 5, color: 'white'}}>{x.des}</Text>
                </View>
            </View>
          })
        }
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    menu: {
        margin: 15,
        width: 150,
        height: 200,
        borderRadius: 10
      },
      desc: {
        height: 40,
        width: 149,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#757574',
        flexDirection: 'row',
        alignItems: 'center',
      }
  });

export default BannerSlider