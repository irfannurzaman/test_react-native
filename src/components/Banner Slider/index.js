import React, { useState } from 'react'
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native'

function BannerSlider(props) {
  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
  ? 1
  : props.itemsPerInterval;
  const [interval, setInterval] = React.useState(1);
  const [intervals, setintervals] = useState(1)
  const [width, setWidth] = React.useState(0);
  const init = (width) => {
    const totalItems = items.length;
    setWidth(width);
    setintervals(Math.ceil(totalItems));
  }
  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset+1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  } 
  
  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    );
  }

    return (
      <View style={styles.container}>

         <ScrollView
           horizontal={true}
           contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
           showsHorizontalScrollIndicator={false}
           onContentSizeChange={(w, h) => init(w)}
           onScroll={data => {
             setWidth(data.nativeEvent.contentSize.width);
             setInterval(getInterval(data.nativeEvent.contentOffset.x));
           }}
           scrollEventThrottle={200}
           pagingEnabled
           decelerationRate="fast"
         >
           {items.map((item, index) => {
             return (
               <View key={index} style={styles.stat(item)}>
                 <Image style={{width: 380, height: 130, borderRadius: 10}} source={item.img}/>
               </View>
             );
           })}
         </ScrollView>
         <View style={styles.bullets}>
           {bullets}
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
    menu: {
      margin: 15,
      marginTop: 30,
      borderWidth: 1,
      width: 250,
      height: 100,
      borderRadius: 10
    },
    stat: (x) => ({
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      flexBasis: '20%',
      flex: 1,
      maxWidth: x.width,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginLeft: x.left,
      marginRight: x.right,
      height: 150,
    }),
    statText: {
      width: '100%',
      textAlign: 'left',
      fontSize: 20,
    },
    statHold: {
      width: '100%',
      marginBottom: 8,
    },
    statLabel: {
      width: '100%',
      textAlign: 'left',
      fontSize: 11,
      fontWeight: '600',
      paddingTop: 5,
    },

    statsHead: {
      paddingTop: 10,
      paddingHorizontal: 12,
    },
    container: {
      width: '100%',
      borderColor: '#ebebeb',
      borderRadius: 8,
      shadowOpacity: 1,
      marginTop: 10,
      shadowOffset: {
        width: 0,
        height: 5
      },
    },
    scrollView: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    },
    bullets: {
      top: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 5,
      justifyContent: 'center'
    },
    bullet: {
      paddingHorizontal: 5,
      fontSize: 20,
    }
  });

export default BannerSlider