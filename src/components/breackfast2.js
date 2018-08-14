import React ,{Component} from 'react';
import { Container, Header, Content, Footer, CardItem, Input, Button, Text, View, Thumbnail, Card, Icon, Left, Right, Body, Title, Subtitle ,FooterTab, Form, Item, Label} from 'native-base';


import {
 
  ImageBackground,StyleSheet,StatusBar,Image,FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class breackfast2 extends Component{
   

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
                    
    <Content>
        
        
    
    <View style={styles.container}>
                  <Image style={styles.image} source={this.props.image}/>
                    <View style={{ padding : 10}}>
                        <Text style={{marginBottom:10,}}>{this.props.title}</Text>
                        <Text style={{lineHeight:30,}}>{this.props.body}</Text>
                    </View>
                </View>
                     </Content>
   

                 
                 
  



                </Container>
        )
    }
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      
        margin: 2,
        backgroundColor : 'white',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
       padding:15,
       
    
},
image:{
    width : '100%',
        height: 160,
        
    
},


})