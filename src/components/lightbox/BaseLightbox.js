import React from 'react';
import {Animated,Dimensions,View,StyleSheet} from 'react-native';
import { Button, Text ,Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
const {width:devicewidth ,height:deviceheight}=Dimensions.get('window');
 export default class BaseLightbox extends React.Component {




    _renderLightbox() {
        // const {children}=this.props ;
       
        return (
            <View style={{ width:300 , height:300, justifyContent: 'center' , alignItems: 'center' ,backgroundColor:'#3c6382' , borderRadius : 4}}>
                 <Text style={{marginBottom:5,marginTop:45,fontSize:20,color:'white',}}>*هدف برنامه*</Text>
                <Text  style={{marginRight:20,marginLeft:20,padding:25,marginBottom:80,lineHeight:24,color:'white',lineHeight:30}}>  این برنامه با هدف کمک به خانه داران که مسعولیت اشپزی را بر عهده دارند نوشته شده است امیدارم که از برنامه ما راضی  باشید برای ادامه برنامه   علامت ضربدر را لمس کنید</Text>
                {/* {children} */}
               {/* for exit */}
                <Button transparent style={{ position: 'absolute', top : 0 , left : 0,}} onPress={() => Actions.pop() }>
                    <Icon name='md-close-circle' style={{ fontSize : 30 , color : 'cyan'}}/>
                </Button>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                {this._renderLightbox()}

                </View>
            
        )
    }

}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'rgba(52,52,52,.5)',
        
        position: 'absolute',
        top : 0 ,
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
