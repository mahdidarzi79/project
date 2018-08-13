import React,{Component} from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,FooterTab,Footer,Button,Icon,Subtitle,Right,Left,Thumbnail,Body,Title, View} from 'native-base';
import Breackfast from './Breackfast';
import BreackfastTab2 from './BreackfastTab2';
import BreackfastTab3 from './BreackfastTab3';
export default class mainbreackfast extends Component{
    render(){
        return(
<Container>
    
<Header style={{ backgroundColor : '#34495e',height:90,}} >

   

<Right>
<Body>
    
<Title style={{fontSize:24}}> اپلیکیشن اشپز باشی </Title>
<Subtitle >از انتخاب شما ممنونیم </Subtitle>

</Body>

<Thumbnail large source={require('./../assets/images/image2.jpg')}/>


</Right>

                    </Header>
<Header  style={{height:15,backgroundColor : '#34495e'}} hasTabs />
                    <Tabs tabBarUnderlineStyle={{backgroundColor:'gold'}}>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading="کم هزینه">
          
            <Breackfast />
        
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading=" متوسط هزینه">
            <BreackfastTab2 />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"#0984e3"}} textStyle={{color:'white'}} tabStyle={{backgroundColor:'#34495e'}} heading="پر هزینه">
            <BreackfastTab3 />
          </Tab>
        </Tabs>
       
        
        
        
        
       
        
        
      
      </Container>
        )
    }

}
class Tab1 extends Component {
    render(){
        return(
            <Container >
                <Content >
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>

                <Text>sdf</Text><Text>sdf</Text>
                <Text>sdf</Text>

                <Text>sdf</Text>
                <Text>sdf</Text>
                <Text>sdf</Text>

                <Text>sdf</Text>

                <Text>sdf</Text>
                <Text>sdf</Text>
                </Content>
                </Container>
        )
    }
}
class Tab2 extends Component {
    render(){
        return(
            <Text>sdf</Text>
        )
    }
}
class Tab3 extends Component {
    render(){
        return(
            <Text>sdf</Text>
        )
    }
}