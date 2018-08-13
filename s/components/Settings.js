import React from 'react';
import {Container, Header, Right, Button, Content, Text, Left, Icon , Form , Item , Input} from 'native-base';
import { AsyncStorage } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Settings extends React.Component {
    componentWillMount() {
        this.state={
            user:{
                name:'',
                email:''
            }
            



        }
       
       
        // AsyncStorage.multiGet(['user:name' , 'user:email'] , (error , result) => {
        //     this.setState({
        //             user : {
        //                 name : result[0][1],
        //                 email : result[1][1]
        //             }
        //         })
        // })
        AsyncStorage.getItem('user',(error,result)=>{
            let user=JSON.parse(result);
                 this.setState({
                              user : {
                                  name : user.name,
                                  email : user.email
                              }
                          })
            
                    })

    }

    render() {
        const { name , email } = this.state.user;
        return (
            <Container>
                  <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                  <Left>
                    <Icon name='md-menu' onPress={()=>Actions.drawerOpen()} style={{color:'white',fontWeight:500}}/>
                    </Left>
                    <Right>
                            <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}> تنظیمات</Text>
                      </Right>
                  </Header>
                  <Content>
                    <Form>
                        <Item  style={{margin:10, borderRadius:5,marginLeft:6,}} rounded>
                        <Input
                                placeholder='نام کاربری'
                                defaultValue={name}
                            
                                onChangeText={this.changeName.bind(this)}
                            />
                            <Icon active name='md-mail' />

                        </Item>
                        
                        <Item  style={{margin:10, borderRadius:5, marginLeft:6}} rounded>
                        <Input
                                placeholder='ایمیل شما'
                                defaultValue={email}
                            
                                onChangeText={this.changeEmail.bind(this)}
                            />
       <Icon active name='md-key' />
                        </Item>
                        
                        
                       <Button  style={styles.submitButton} full onPress={this.changeSettings.bind(this)}>
                       <Text style={{color:'white'}}>  ثبت تغیر    </Text>

                         </Button>
                    </Form>
                </Content>

      </Container>
        )
    }

    changeSettings(){
        // AsyncStorage.setItem('user:name',this.state.user.name);
        // AsyncStorage.setItem('user:email',this.state.user.email);
        AsyncStorage.setItem('user',JSON.stringify(this.state.user));
        
               

        Actions.replace('home')

    }

    changeName(text) {
        this.setState(prevState => {
            return {
                user : {
                    ...prevState.user,
                    name : text
                }
            }
        });
    }

    changeEmail(text) {
        this.setState(prevState => {
            return {
                user : {
                    ...prevState.user,
                    email : text
                }
            }
        });
    }
}