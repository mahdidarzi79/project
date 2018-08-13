import React from 'react';
import { StatusBar } from 'react-native';
import { Container , Spinner, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Home from './Home';
export default class Splash extends React.Component {
    componentWillMount() {

        setTimeout(() => {
            if(true) {
                // Actions.replace('home');
                 Actions.reset('root');
            } else {
                // Actions.replace('login');
                Actions.reset('auth');
            }
        },0)


    }

    render() {
        return (
            <Container  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor : '#34495e'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/>
                <Text style={{ color : 'white',fontSize : 18, fontFamily : 'IRANSansMobile'}}>مجله آموزشی راکت</Text>
                <Spinner />
            </Container>
        )
    }
}