import React from 'react';
import { StatusBar } from 'react-native';
import { Container , Spinner, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Home from './Home';
export default class Splash extends React.Component {
    // componentWillMount() {

    //     setTimeout(() => {
    //         if(false) {
    //             Actions.Home();
    //         } 
    //         else {
    //             Actions.login();
    //         }
    //     },1000)
    componentWillMount(){
        setTimeout(()=>{
if(false){
    Actions.login();
}
else{
    Actions.Home();
}

        })
    }
      


    

    render() {
        return (
            <Container  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor : '#34495e'}}>
                <StatusBar  backgroundColor="#2c3e50" barStyle="light-content"/>
                <Text style={{ color : 'white',fontSize : 18, fontFamily : 'IRANSansMobile'}}>مجله آموزشی راکت</Text>
                <Spinner color='cyan' />
            </Container>
        )
    }
}