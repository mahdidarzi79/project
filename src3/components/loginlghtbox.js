import React from 'react';
import {Animated,Text} from 'react-native';
import BaseLightbox from './lightbox/BaseLightbox';
import { View } from 'native-base';
export default  class loginLightbox extends React.Component {
     
      
    render() {
        return (
            <BaseLightbox verticalPercent={0.7} horizontalPercent={0.5}>
                <Text>Welcome to roocket</Text>
                <Text>Learn React native</Text>
            </BaseLightbox>
        )
    }
}