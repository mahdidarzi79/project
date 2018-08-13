

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Button, Thumbnail, Text, Left, Body, Icon, Item } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./assets/images/1.jpg'),
  },
 
  {
    text: 'Card 12121212One',
    name: 'two',
    image: require('./assets/images/2.jpg'),
  },
 
  {
    text: 'Card121 One',
    name: 'three',
    image: require('./assets/images/3.jpg'),
  }
];
export default class DeckSwiperAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
         <DeckSwiper
         ref={(c) => this._deckSwiper = c}
         dataSource={cards}
         renderItem={Item=><Card>
<CardItem bordered>
<Thumbnail source={Item.image} />
<Body>
<Text> 121212</Text>
<Text> 122121</Text>

  </Body>



</CardItem>
<CardItem cardBody >

<Body>
<Image source={Item.image} style={{ height: 200, flex: .5 }}  />

  </Body>
  



</CardItem>

<CardItem cardbody>

<Body>
<Icon name='heart' />
<Text> 122121</Text>
  </Body>
  



</CardItem>







         </Card>}
         
         />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
         <Button onPress={() => this._deckSwiper._root.swipeLeft()}>
         <Icon name="arrow-back" />
            <Text>Swipe Left</Text>

           </Button>


           <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
  }
