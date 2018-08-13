import React, { Component } from 'react';
import { Image,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Right} from 'native-base';

export default class Product extends Component {
    render() {
        const {image,title,body,prise}=this.props;

        return (
          
            <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Body>
                            <Text style={{ marginRight: 20 , fontFamily : 'IRANSansMobile'}}>{title}</Text>
                            <Text style={{ textAlign : 'right' , fontFamily : 'IRANSansMobile'}} note>1932/45/44</Text>
                        </Body>
                        <Thumbnail  source={image} />
                    </Left>
                </CardItem>
                <CardItem cardBody >
                    <Image source={image}  style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Text numberOfLines={3} style={{ fontFamily : 'IRANSansMobile'}}>
                       {body}
                    </Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button success>
                            <Text style={{ fontFamily : 'IRANSansMobile'}}>خرید محصول</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text style={{ fontSize : 15 ,  fontFamily : 'IRANSansMobile'}}>{prise}تومان</Text>
                    </Right>
                </CardItem>
            </Card>
            
        );
        
    
    
    

  }
  }