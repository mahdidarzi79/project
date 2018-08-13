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
                     prise:'85000',
                    title : 'کباب مرغ با سیب زمینی پخته و ذرت',
                    prise:'85000',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i1.jpg"),
                    body : 'قبل از گریل کردن با خواباندن سینه مرغ کبابی در سس باربکیو کمی به آن عطر و طعم بدهید. با چنگال در سیب زمینی ها چند سوراخ ایجاد کنید و سپس در مایکروویو قرار دهید. سینه مرغ را به صورت پروانه ای برش دهید تا سرعت سرخ شدن بالا رود. مدت پخت این غذا 20 دقیقه می باشد.'
                },
                
                {
                    id:'2',  
                    prise:'9000',
                    title : 'فاجیتا',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i2.jpg"),
                    body : 'به گوشت و سبزیجات خود ادویه بزنید و غذایی درست کنید که خانواده تان به زودی آن را فراموش نکند. بسته به نوع گوشتی که انتخاب می کنید، پخت مواد اولیه شما باید حدود 10 دقیقه طول بکشد. '
                },
                { 
                    id:'3',
                    prise:'20000',
                    title : 'آشنایی کامل با Angular Cli',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i3.jpg"),
                    body : 'ابزاری است که به برنامه نویسان angular کمک میکنند تا بتوانند بهتر و راحتتر با Angular کار کنن و تمرکز کامل خود را بر روی توسعه اپلیکشن خود قرار دهند و بخش های ایجاد فایل های مختلف ، تست کدها ، مشاهده خطاهای کاربری و ... رو به Cli واگذار کنند در این دوره قصد دارم بصورت کامل استفاده از این ابزار رو به شما آموزش بدم  تا بتونید بصورت کامل با این ابزار آشنا بشید و در پروژه های خودتون ازش استفاده کنید . '
                },
                {
                    id:'4',  
                    prise:'120000',
                    title : 'پنیر سرخ شده',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i4.jpg"),
                    body : 'بچه ها عاشق ساندویچ های پنیر سرخ شده هستند. کمی گوجه فرنگی، قارچ، آووکادو، پنیر موتزارلا یا چدار اضافه کنید و مقدار اندکی کره یا مارگرین روی نان بمالید و هر طرف را به مدت 1 دقیقه سرخ کنید.  '
                },
                {
                    id:'5',
                    prise:'70000',
                    title : ' شیش کباب',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i5.jpg"),
                    body :"سیخ کباب را به مدت 20 دقیقه در آب بخیسانید قبل از آماده کردن گوشت و سبزیجات. بهترین راه کباب کردن است که 10 دقیقه بیشتر طول نمی کشد. این غذای خوشمزه با برنج کامل می شود."


                },
                {  
                    id:'6',
                    prise:'6000',
                    title : 'اسپاگتی ',
                    imageUrl :require("./../../assets/images/lunch/Tab1/i6.jpg"),
                    body :"این غذای کلاسیک ایتالیایی به راحتی درست شده و افراد خانواده را کاملا سیر می کند. می توانید از پاستای گندم و یا به عنوان غذای فاقد گلوتن از پاستای نشاسته استفاده کنید. پخت ورمیشل تنها 3 دقیقه طول می کشد و نوع گندم آن حدود 6 دقیقه. ماکارونی های رشته ای هم فقط در چند دقیقه پخته می شوند.                    "

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
height: null,}} source={require('./../../assets/images/l.jpg')} >
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