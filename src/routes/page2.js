import React ,{Component} from 'react';
import { Container, Header, Content, Footer, CardItem, Input, Button, Text, View, Thumbnail, Card, Icon, Left, Right, Body, Title, Subtitle ,FooterTab} from 'native-base';


import {
 
  ImageBackground,StyleSheet,StatusBar,Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class page2 extends Component{

    render(){
        return(
            <Container  >
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
height: null,}} source={require('./../assets/images/l.jpg')} >
    <Content    >
        <Card style={{justifyContent:'center',alignItems:'center',}} transparent>
      <Button style={styles.Button1} light full rounded bordered onPress={()=>Actions.mainbreackfast()}>
      <Icon style={{color:'red'}} name='heart'/>
<Text style={{fontSize:20}}>صبحانه</Text>
<Icon style={{color:'red'}} name='heart'/>
          </Button  >
          <Button  style={styles.Button1} light full rounded bordered onPress={()=>Actions.Dinnermain()}>
          <Icon style={{color:'red'}} name='heart'/>
<Text style={{fontSize:20}}>ناهار</Text>
<Icon style={{color:'red'}} name='heart'/>
          </Button >
          <Button  style={styles.Button1} light full rounded bordered onPress={()=>Actions.Lunchmain()}> 
          <Icon style={{color:'red'}} name='heart'/>
<Text style={{fontSize:20}}>شام</Text>
<Icon style={{color:'red'}} name='heart'/>
          </Button>
    
      </Card>
                     </Content>
    </ImageBackground>

                 
                
  



                </Container>
        )
    }
}
const styles=StyleSheet.create({
    Button1:{
    marginTop:20,
    marginBottom:10,
    
},
Button2:{
    marginTop:30,
    marginLeft:320,
    
},
Button3:{
    marginTop:10,
    
},

})