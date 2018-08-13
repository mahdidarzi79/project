import React from 'react';
import {Animated,Dimensions,View,StyleSheet} from 'react-native';
import { Button, Text ,Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
const {width:devicewidth ,height:deviceheight}=Dimensions.get('window');
 export default class BaseLightbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity : new Animated.Value(0)
        }

    }

    componentWillMount() {
        Animated.timing(this.state.opacity,{
            toValue : 1,
            duration : 300
        }).start();
    }

    close() {
        Animated.timing(this.state.opacity,{
            toValue : 0,
            duration : 300
        }).start(Actions.pop);
    }

    _renderLightbox() {
        const { children , verticalPercent = 1 , horizontalPercent = 1 } = this.props;
        const width = verticalPercent ? devicewidth * verticalPercent : devicewidth;
        const height = horizontalPercent ? deviceheight * horizontalPercent : deviceheight;
        return (
            <View style={{ width , height, justifyContent: 'center' , alignItems: 'center' , backgroundColor : 'white' , borderRadius : 4}}>
                {children}
                <Button transparent style={{ position: 'absolute', top : 0 , left : 0}} onPress={() => this.close() }>
                    <Icon name='md-close-circle' style={{ fontSize : 30 , color : '#34495e'}}/>
                </Button>
            </View>
        )
    }

    render() {
        return (
            <Animated.View style={[styles.container , { opacity : this.state.opacity }]}>

                {this._renderLightbox()}
            </Animated.View>
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
