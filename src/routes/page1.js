
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer,Button, Thumbnail } from 'native-base';
import { BaseLightbox } from "./../components/lightbox/BaseLightbox";




 

export default class App extends React.Component {
  
    constructor(props) {
        super(props);

        this.animateValue1 = new Animated.Value(0);
        this.animateValue2 = new Animated.Value(0);
        this.animateValue3 = new Animated.Value(0);
        this.animateValue4 = new Animated.Value(0);
    }

    componentWillMount() {
        this.animate();
    }

    animate() {
        this.animateValue1.setValue(0);
        this.animateValue2.setValue(0);
        this.animateValue3.setValue(0);
        this.animateValue4.setValue(0);
        const createAnimation = (value , duration , easing , delay = 0) =>
            Animated.timing(value,{
                toValue : 1,
                duration ,
                easing,
                delay
            });

        Animated.parallel([
            createAnimation(this.animateValue1 , 2000 , Easing.ease),
            createAnimation(this.animateValue2 , 1000 , Easing.ease,1000),
            createAnimation(this.animateValue3 , 1000 , Easing.ease,2000),
            createAnimation(this.animateValue4 , 1000 , Easing.ease,2500),
        ]).start()
    }

    render() {
        const scaleText = this.animateValue1.interpolate({
            inputRange : [0,1],
            outputRange : [0.5 , 2]
        });

        const spinText = this.animateValue1.interpolate({
            inputRange : [0,1],
            outputRange : ['0deg' , '720deg']
        });

        const introButton = this.animateValue1.interpolate({
            inputRange : [0,1],
            outputRange : [-100 , 30]
        });
        const introButton2 = this.animateValue1.interpolate({
            inputRange : [0,1],
            outputRange : [-100 , 350]
        });

        return (
            <ImageBackground style={{flex: 1,

                width: null,
                height: null,}} source={require('./../assets/images/image1.jpg')} >
            <View  style={{ flex : 1 , justifyContent: 'center' , alignItems: 'center', }}>
               <Animated.View style={{ transform: [{ scale: scaleText }]}}>
                   
               </Animated.View>
               
               
                <Animated.View style={{marginTop : 115, top :introButton2 , position: 'absolute',}}>
                   <Button full rounded onPress={() =>Actions.replace('page2')}>
<Text style={{padding:10,margin:20,color:'white',fontSize:20,fontFamily:'IRANSansMobile_Medium.ttf'}}>
ورود به اپلیکیشن
    </Text>
                       </Button>
                </Animated.View>
                <Animated.View style={{marginTop : 120 , top :introButton2 , position: 'absolute'}}>
                   <Button style={{marginTop :50}} full rounded onPress={() =>Actions.reset('lightbox')}>
<Text style={{padding:10,margin:20,color:'white',fontSize:20,fontFamily:'IRANSansMobile_Medium.ttf'}}>
در باره ما
    </Text>
                       </Button>
                </Animated.View>
            </View>
            </ImageBackground>
        )

    }
}






