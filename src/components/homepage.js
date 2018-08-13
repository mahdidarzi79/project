import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ImageBackground,
  StatusBar,
  TouchableNativeFeedback
  
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Footer,Button, Thumbnail, Left ,Right,Body,Title,Subtitle, FooterTab, Icon,} from 'native-base';
import {lightbox2  } from "./../components/lightbox2";

export default class homepage extends React.Component {
    componentWillMount(){
        Actions.BaseLightbox();
    }
    render() {
        return (
            <Container>
                <StatusBar hidden />
                 <Header style={{ backgroundColor : '#34495e',height:90,}} >

   

<Right>
<Body>
    
<Title style={{fontSize:24}}> اپلیکیشن اشپز باشی </Title>
<Subtitle >از انتخاب شما ممنونیم </Subtitle>

</Body>

<Thumbnail large source={require('./../assets/images/image2.jpg')}/>


</Right>

                    </Header>
                  <ImageBackground style={{flex: 1,

width: null,
height: null,}} source={require('./../assets/images/image1.jpg')} >

  <Content>
          
          </Content>
</ImageBackground>
              
            <Footer style={{ backgroundColor : '#34495e'}}>
            <TouchableNativeFeedback onPress={()=>Actions.page2()}>
<Text style={{margin:10,color:'white',fontSize:20}}>ورود به اپلیکیشن </Text>
               </TouchableNativeFeedback>
                </Footer>
            </Container>

        )
    }
}