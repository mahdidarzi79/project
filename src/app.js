
import React, { Component } from 'react';
import { View,Text, Form} from 'native-base';
import { Router,Scene,Lightbox } from 'react-native-router-flux';
import homepage from './components/homepage';
import Breackfast from './components/Breackfast';
import breackfast2 from './components/breackfast2';
import BaseLightbox from './components/lightbox/BaseLightbox';
import lightbox2 from './components/lightbox2';
import page2 from './routes/page2';
import mainbreackfast from './components/mainbreackfast';
import Lunchmain from './components/lunch/Lunchmain';
import Dinnermain from './components/dinner/Dinnermain';
import {ScrollView} from 'react-native';
import {FlatList,StyleSheet,Image,TouchableNativeFeedback,I18nManager} from 'react-native';

I18nManager.forceRTL(false);


 


export default class app extends Component {
    componentWillMount(){
        this.setState({
            articles : [

                { 
                    id:'1',
                     prise:'85000',
                    title : 'آموزش پروژه محور React Native',
                    prise:'85000',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'یک فریم ورک جاوا اسکریپت برای ساختن برنامه های موبایلِ native است. این فریم ورک از فریم ورکِ React استفاده می کنه و APIها و کامپوننت های تعبیه شده ی داخلیِ زیادی داره. در گذشته شما با Javascript تنها میتوانستید بخش Frontend وبسایت های خودتان رو بوجود بیاورید، اما با پیشرفت روز افزون Javascript امروزه میتوانید سمت سرور هم با javascript کد نویسی کنید یا حتی میتوانید اپلیکیشن های اندرویدی یا ios را تنها با javascript بوجود بیاورید. در این دوره میخواهیم با یکی از جدیدترین تکنولوژی های که به ما امکان ایجاد اپلیکیشن های اندرویدی یا ios را با جاوا اسکریپت میدهد بصورت کامل آشنا بشویم . '
                },
                
                {
                    id:'2',  
                    prise:'9000',
                    title : 'آموزش webpack',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'در این دوره قصد دارم webpack که یک module bundler برای جاوا اسکریپت هست رو به شما آموزش بدم . حالا module bundler چیه ؟ در جاوا اسکریپت همیشه احساس نیاز به ابزاری میشد که بتونه فایل های مختلفی مثل جاوا اسکریپت , تصاویر , فونت ها و موارد دیگه که تعدادشون هم در هر پروژه ای ممکنه خیلی خیلی زیاد باشه رو مدیریت کنه . حالا webpack میتونه به عنوان ورودی میتونه این فایل ها رو بگیره و هر بلایی که شما خواستین سر اطلاعات بیاره و در خروجی اطلاعات مورد انتظار شما رو برگردونه. حالا اگر میخواین اطلاعات بیشتری در مورد webpack بدست بیارید پس حتما قسمت معرفی و راه اندازی این دوره رو مشاهده کنید. '
                },
                { 
                    id:'3',
                    prise:'20000',
                    title : 'آشنایی کامل با Angular Cli',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'ابزاری است که به برنامه نویسان angular کمک میکنند تا بتوانند بهتر و راحتتر با Angular کار کنن و تمرکز کامل خود را بر روی توسعه اپلیکشن خود قرار دهند و بخش های ایجاد فایل های مختلف ، تست کدها ، مشاهده خطاهای کاربری و ... رو به Cli واگذار کنند در این دوره قصد دارم بصورت کامل استفاده از این ابزار رو به شما آموزش بدم  تا بتونید بصورت کامل با این ابزار آشنا بشید و در پروژه های خودتون ازش استفاده کنید . '
                },
                {
                    id:'4',  
                    prise:'120000',
                    title : 'ساخت یک وبسایت آموزشی (فروشگاهی) با لاراول',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'این دوره یک دوره کامل برای افرادی است که میخواهند لاراول را به درستی آموزش ببینند بعد از دوره آشنای با لاراول که بصورت رایگان در دسترس همگان قرار گرفت حالا وقت آن رسیده که در قالب یک پروژه کامل و بسیار کاربردی ، بهتر لاراول را فرا بگیرید تا بتوانید پروژه های که مد نظر خودتون هست را در پایان این دوره بنا کنید .'
                },
                {
                    id:'5',
                    prise:'70000',
                    title : 'آموزش Redux',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'شاید تا به حال اسم Redux رو نشنیده باشید اما اگر با جاوااسکریپت یا فریمورک ReactJs کار کردید حتما پیشنهاد میکنم این توضیحات رو مطالعه کنید . ببینید ReactJs یک فریمورک جاوااسکریپتی ، با هدف ایجاد راحتتر UI ها ، توسط فیسبوک ایجاد شده است که واقعا هم در ایران و جهان مورد توجه خیلی از توسعه دهندگان جاوا اسکریپتی قرار گرفته. حالا در کنار این فریمورک ، فریسبوک یک مفهوم یا یک الگو ارائه داده تا یک قدم ReactJs رو فراتر از یک فریمورک معمولی بودن ببره و بشه از اون در پروژه های بزرگ هم با استفاده از این مفهوم استفاده کرد . '
                },
                {  
                    id:'6',
                    prise:'6000',
                    title : 'آموزش شی گرایی ',
                    imageUrl :require('./assets/images/react-native.png'),
                    body : 'در گذشته قبل از اینکه مفهومم شی گرایی وارد زبان php بشه برنامه نویس ها مجبور بودن که php رو در کنار html استفاده کنن که این روش در پروژهای کوچیک مشکل بزرگی محسوب نمی شد اما زمانی که صحبت از ساخت برنامه های متوسط و بزرگ به میون می اومد کار یکم سخت میشد چون اینطور برنامه نویسی هر چقدر هم مدیریت شده باشه دارای کد نویسی اسپاگتی و کثیفیه که مدیریت و توسعه اش به نسبت زمانی که با استفاده از مفهوم شی گرایی برنامه نویسی میکنید خیلی دشوارتر میکنه . '
                },
            ]
        })
    }

  render() {
      return (
          <Router>
              <Lightbox>
                  <Scene key="root" hideNavBar>
                      <Scene key="homepage" component={homepage} initial  title="homepage" />
                      <Scene key="page2" component={page2}   />
                      <Scene key="breackfast" component={Breackfast}   />
                      <Scene key="breackfast2" component={breackfast2}   />
                      <Scene key="mainbreackfast" component={mainbreackfast}   />
                      <Scene key="Lunchmain" component={Lunchmain}    />
                      <Scene key="Dinnermain" component={Dinnermain}    />
                  </Scene>

                  <Scene key="BaseLightbox" component={BaseLightbox} />
                  
                  
              </Lightbox>
          </Router>
    //     <FlatList horizontal={true}
    //     data={this.state.articles}
    //     renderItem={({item})=>
    //     <TouchableNativeFeedback onPress={()=>Actions.breackfast2({title: item.title,image:item.imageUrl,body:item.body})}>
       
    //     <View style={styles.container}>
 
    //     <Image source={item.imageUrl} style={styles.image} />
 
    //     <View style={{ padding : 10}}>
 
    //         <Text >{item.title}</Text>
 
    //         <Text note numberOfLines={2} style={styles.body}>{item.body}</Text>
 
    //     </View>
 
    // </View>
    // </TouchableNativeFeedback>
    // }
    //     keyExtractor={(item)=>item.id}
    //     // numColumns={2}
        
    //     />
     
      )
  }
}
const styles=StyleSheet.create({
    container:{
      flex:.5,
      width:200,
      height:150,
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



