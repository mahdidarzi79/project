import React from 'react';

import { Actions } from 'react-native-router-flux';
import { Image ,Text,View} from 'react-native';
import { Item, Icon } from 'native-base';

export default class drawerLayout extends React.Component {
   


    

    render() {
        return (
            <View >

     <Image  source={require('./../assets/images/react-native.png')} style={{width:'100%', height:180}}/>

            <View >

     <Item  style={{justifyContent:'flex-end',borderColor:'white'}} onPress={()=>Actions.replace('home')}>  
<Text style={{padding:10}}>
home
    </Text>
<Icon name='md-home' style={{margin:3}}/>



         </Item>
         
     <Item style={{justifyContent:'flex-end',borderColor:'white'}} onPress={()=>Actions.Settings()}> 
<Text style={{padding:10}}>
settings
    </Text>
<Icon name='md-settings' style={{margin:3}}/>



         </Item>

 


            </View >


            </View >
           
        )
    }
}