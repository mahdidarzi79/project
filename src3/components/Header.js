import React , { Component } from 'react';
import { StyleSheet , View , Text} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerText}>مجله آموزشی راکت</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerView : {
        backgroundColor : '#7f8c8d',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    headerText : {
        fontFamily : 'IRANSansMobile',
        fontSize : 18,
        color : 'white'
    }
})