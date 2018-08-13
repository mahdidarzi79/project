import React,{Component} from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,FooterTab,Footer,Button,Icon,Subtitle,Right,Left,Thumbnail,Body,Title, View} from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
export default class Lunchmain extends Component{
    render(){
        return(
<Container>
    
    
 <Header style={{ backgroundColor : '#34495e',height:90,}} >

   

 <Right>
 <Body>
    
 <Title style={{fontSize:24}}> اپلیکیشن اشپز باشی </Title>
 <Subtitle >از انتخاب شما ممنونیم </Subtitle>

 </Body>

 <Thumbnail large source={require('./../../assets/images/image2.jpg')}/>


</Right>
                     </Header>
                     <Header  style={{height:15,backgroundColor : '#34495e'}} hasTabs />
                    <Tabs tabBarUnderlineStyle={{backgroundColor:'gold'}}>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading="اشپزی کم بلدم">
          
            <Tab1 />
        
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading="اشپزی بلدم">
          
            <Tab2/>
        
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading="اشپزیم خیلی خوبه">
          
          <Tab3/>
      
        </Tab>
        
        </Tabs>

       
        
        
        
        
       
        
        
       
      </Container>
        )
    }

}

