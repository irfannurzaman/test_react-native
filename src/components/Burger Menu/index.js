import React, {useState} from 'react'
import {View, Animated, StyleSheet, Text, TouchableOpacity} from 'react-native'


function BurgerMenu() {
  const [y_translate] = useState(new Animated.Value(0));
  const [y_translate2] = useState(new Animated.Value(0));
  const [y_translate1, sety_translate1] = useState(new Animated.Value(1));
  const [state, setState] = useState(false)

  const onClick = () => {
    if (y_translate1._value === 1) {
            Animated.sequence([
              Animated.spring(y_translate, {
                toValue: -1,
                friction: 1,
                tension: 10,
                useNativeDriver: true
              }).start(),
            ]);
            Animated.sequence([
              Animated.spring(y_translate2, {
                toValue: 1,
                friction: 2,
                tension: 10,
                useNativeDriver: true
              }).start(),
            ]);
      sety_translate1(new Animated.Value(0));
      setState(true)
    } else {
        Animated.spring(y_translate, {
            toValue: 0,
            friction: 2,
            tension: 10,
            useNativeDriver: true
        }).start();
        Animated.spring(y_translate2, {
            toValue: 0,
            friction: 2,
            tension: 10,
            useNativeDriver: true
        }).start();
        sety_translate1(new Animated.Value(1));
        setState(false)
    }
  };

      const rotation1 = y_translate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '40deg'],
      });
      const rotation2 = y_translate2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '40deg'],
      });

    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={onClick}
        style={{
          height: 40,
          width: 40,
        }}>
            <Animated.View style={[{transform: [{rotate: rotation1}]}]}>
                 <View style={styles.draw(31)}/>
            </Animated.View>
            {
                state? <View/>
                : <Animated.View>
                <View style={styles.draw(43)}/>
           </Animated.View>
            }
            <Animated.View style={[{transform: [{rotate: rotation2}]}]}>
                 <View style={styles.draw(31)}/>
            </Animated.View>
      </TouchableOpacity>
    )
}

export default BurgerMenu



const styles = StyleSheet.create({
    draw: (type) => ({
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        width: type,
        marginTop: 3
    })
});
