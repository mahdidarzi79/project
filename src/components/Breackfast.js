import React ,{Component} from 'react';
import { Container, Header, Content, Footer, CardItem, Input, Button, Text, View, Thumbnail, Card, Icon, Left, Right, Body, Title, Subtitle ,FooterTab} from 'native-base';


import {
 
  ImageBackground,StyleSheet,StatusBar,Image,FlatList,TouchableNativeFeedback,TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class Breackfast extends Component{
    componentWillMount(){
        this.setState({
            articles : [

                { 
                    id:'1',
                    title : 'ساندویچ تخم مرغ پخته',
                    imageUrl :require('./../assets/images/breackfast/i1.jpg'),
                    body : 'ابتدا باید چند تخم‌مرغ را بپزید تا کاملا سفت شوند، سپس روی یک تکه نان گرد یک لایه گوجه‌فرنگی و تخم‌مرغ پخته حلقه شده قرار دهید، کمی نمک و فلفل و مقدار کمی پنیر پیتزا روی آن بریزید و به مدت یک دقیقه در مايکروفر قرار دهید تا بدون نرم شدن گوجه، پنیر آب شود.'
                },
                
                {
                    id:'2',  
                    prise:'9000',
                    title : 'املت سبزیجات',
                    imageUrl :require('./../assets/images/breackfast/i2.jpg'),
                    body : 'درست کردن املت با گوجه‌فرنگی حتماً برای شما تکراری شده اما املت را میشود با هر سبزیجات دیگری درست کرد و با عوض کردن سبزیجات در آن تنوع ایجاد کرد. مثلاً می توانید یک پیاز کوچک را خلال کنید و با چند برگ اسفناج تفت دهید. بعد از این که نرم شدند، دو تخم‌مرغ را بزنید و روی آن ها بریزید. شما می توانید برای املت از سبزیجات دیگری مثل قارچ، هویج، شوید و گل‌کلم هم استفاده کنید.'
                },
                { 
                    id:'3',
                    prise:'20000',
                    title :   'نان و پنیرو میوه',
                    imageUrl :require('./../assets/images/breackfast/i3.jpg'),
                    body : 'میوه یکی از بهترین خوراکی‌ها برای صبحانه است. نان و پنیر و میوه از زمان قدیم جزء صبحانه‌هاي‌ ایرانی بوده. میوه را میتوانید به میل خودتان و باتوجه به فصل انتخاب کن شما میتوانید از میوه‌هایي مثل انگور، هندوانه، زردآلو، سیب و گلابی به همراه پنیر در صبحانه مصرف کنید. برای این که صبحانه خوشمزه‌تری داشته باشید برای میوه‌هاي‌ شیرین مثل انگور از پنیر‌هاي‌ شور مثل لیقوان استفاده کنید. '
                },
                {
                    id:'4',  
                    prise:'120000',
                    title : 'تست تخم مرغ',
                    imageUrl :require('./../assets/images/breackfast/i4.jpg'),
                    body : 'این صبحانه مقوی و پرانرژی برای بچه‌هایي که به مدرسه میروند و کسانی که کار سنگین دارند، مناسب است. دریک کاسه کمی خامه صبحانه ريخته، سپس مقداری مغز گردوی رنده شده را روی آن بریزید. بعد مقداری مغز بادام، فندق، پسته، قیسی و کشمش را خرد کنید و روی خامه اضافه کنید. این خوراکی خوشمزه را می توانید با نان میل کنید و تا وقت ناهار نگران تمام شدن انرژی اعضای خانواده نباشید.'
                },
                {
                    id:'5',
                    prise:'70000',
                    title : ' نان تست و کره',
                    imageUrl :require('./../assets/images/breackfast/i5.jpg'),
                    body : 'نان تست شده هم مزه خوبی دارد و هم هضم آن آسان‌تر است. اگر توستر ندارید لازم نیست نگران تست کردن نان باشید. شما میتوانید مقداری کره دو طرف نان بمالید و آنرا در تابه داغ قرار دهید. نان را چند بار برگردانید و صبر کنید تا کره نان را سرخ و برشته کند. می توانید روی این نان‌هاي‌ تست کره‌اي کمی خاک قند بپاشید و با مربای تمشک آنرا سرو کنید. البته این نان‌ها با پنیر هم بسیار خوشمزه خواهند شد.'
                },
                {  
                    id:'6',
                    prise:'6000',
                    title : 'ترافل   ',
                    imageUrl :require('./../assets/images/breackfast/i6.jpg'),
                    body : 'این خوراکی فقط شبیه ترافل است و درست کردن آن از شما وقت زیادی نمی گیرد. برای درست کردن این صبحانه کامل، مقوی و پرانرژی کافی است روی یک ورقه نان جوی سبوسدار، مقداری کره بادام‌زمینی بمالید، سپس مقداری عسل روی کره بریزید و آن رابا موز بپوشانید. اگر دوست دارید، میتوانید نان‌ها را کمی در مايکروفر داغ کنید. این صبحانه پرانرژی برای بچه‌ها مناسب است.'
                },
            ]
        })
    }

    render(){
        return(
            <Container  >
                <StatusBar hidden />
               
                    <ImageBackground style={{flex: 1,

width: null,
height: null,}} source={require('./../assets/images/l.jpg')} >
    <Content    >
       <FlatList 
       data={this.state.articles}
       renderItem={({item})=>
       <TouchableNativeFeedback onPress={()=>Actions.breackfast2({title: item.title,image:item.imageUrl,body:item.body})}>
      
       <View style={styles.container}>

       <Image source={item.imageUrl} style={styles.image} />

       <View style={{ padding : 10}}>

           <Text >{item.title}</Text>

           <Text note numberOfLines={2} style={styles.body}>{item.body}</Text>

       </View>

   </View>
   </TouchableNativeFeedback>
   }
       keyExtractor={(item)=>item.id}
       numColumns={2}
       
       />
                     </Content>
    </ImageBackground>

                 
                
  



                </Container>
        )
    }
}
const styles=StyleSheet.create({
    container:{
      flex:1,
        margin: 5,
        backgroundColor : 'white',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
    
},
image:{
    width : '100%',
        height: 120
    
},


})