import React from 'react';
import { Container , Header , View , Text , Left , Button , Right , Content , Form , Item , Icon , Input } from 'native-base';
import styles from './../assets/styles/index';
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left >
                        <Button  style={{ backgroundColor : '#34495e',borderColor:'cyan', borderWidth:1,}}  >
                            <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}> عضویت</Text>
                        </Button>
                    </Left>
                    <Right>
                    <Button  style={{ backgroundColor : '#34495e',borderColor:'cyan', borderWidth:1,}}  >
                        <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>  ورود    </Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Item error style={{margin:10, borderRadius:5,marginLeft:6,}} rounded>
                            <Input placeholder='ایمیل خود را وارد کنید'/>
                            <Icon active name='md-mail' />
                        </Item>
                        <Text style={{ fontSize:16,marginBottom:10 , color: 'red'}}>  پر کردن این فیلد الزامی    </Text>
                        <Item error style={{margin:10, borderRadius:5, marginLeft:6}} rounded>
                            <Input placeholder='پورد خود را وارد کنید'/>
                            <Icon active name='md-key' />
                        </Item>
                        <Text style={{ fontSize:16,marginBottom:10 , color: 'red'}}>  پر کردن این فیلد الزامی    </Text>
                        
                       <Button  style={styles.submitButton} full onPress={()=>Actions.loginLightbox()}>
                       <Text style={{color:'white'}}>  ورود    </Text>

                         </Button>
                    </Form>
                </Content>
                <Content >

                <Text style={{margin:60}}>

                    sdfsdf
                    </Text>
                    </Content>
               
            </Container>

        )
    }
}