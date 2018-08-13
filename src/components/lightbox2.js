import React from 'react';
import {Animated,Dimensions,View,StyleSheet,Image} from 'react-native';
import { Button, Text ,Icon, CardItem, Thumbnail} from 'native-base';
import { Actions } from 'react-native-router-flux';
const {width:devicewidth ,height:deviceheight}=Dimensions.get('window');
 export default class BaseLightbox extends React.Component {




    _renderLightbox() {
        // const {children}=this.propsss;
       
        return (
            <View style={{ width:300 , height:300, justifyContent: 'center' , alignItems: 'center' , backgroundColor : 'white' , borderRadius : 4}}>



<Text style={{padding:25,marginLeft:20,marginRight:20,lineHeight:24}} >سلام به شما کاربر عزیز ما تیم برنامه نویسی دوستدار دانش هستیم که  کارما توسعه و ساخت اپلیکیشن های موبایل با فریم ورک ریکت نیتیو است</Text>
                
               
                <Button transparent style={{ position: 'absolute', top : 0 , left : 0}} onPress={() => Actions.pop() }>
                    <Icon name='md-close-circle' style={{ fontSize : 30 , color : '#34495e'}}/>
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
