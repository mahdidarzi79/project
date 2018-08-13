import React from 'react';
import { AsyncStorage,FlatList } from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View, Spinner} from 'native-base';

import { Actions } from 'react-native-router-flux';
import Product from './Product';


export default class Home extends React.Component {
    componentWillMount(){//research
        this.setState({
            articles : [

                { 
                    id:'1',
                     prise:'85000',
                    title : 'آموزش پروژه محور React Native',
                    prise:'85000',
                    imageUrl :require('./../assets/images/react-native.png'),
                    body : 'یک فریم ورک جاوا اسکریپت برای ساختن برنامه های موبایلِ native است. این فریم ورک از فریم ورکِ React استفاده می کنه و APIها و کامپوننت های تعبیه شده ی داخلیِ زیادی داره. در گذشته شما با Javascript تنها میتوانستید بخش Frontend وبسایت های خودتان رو بوجود بیاورید، اما با پیشرفت روز افزون Javascript امروزه میتوانید سمت سرور هم با javascript کد نویسی کنید یا حتی میتوانید اپلیکیشن های اندرویدی یا ios را تنها با javascript بوجود بیاورید. در این دوره میخواهیم با یکی از جدیدترین تکنولوژی های که به ما امکان ایجاد اپلیکیشن های اندرویدی یا ios را با جاوا اسکریپت میدهد بصورت کامل آشنا بشویم . '
                },
                
                {
                    id:'2',  
                    prise:'9000',
                    title : 'آموزش webpack',
                    imageUrl :require('./../assets/images/webpack.jpg'),
                    body : 'در این دوره قصد دارم webpack که یک module bundler برای جاوا اسکریپت هست رو به شما آموزش بدم . حالا module bundler چیه ؟ در جاوا اسکریپت همیشه احساس نیاز به ابزاری میشد که بتونه فایل های مختلفی مثل جاوا اسکریپت , تصاویر , فونت ها و موارد دیگه که تعدادشون هم در هر پروژه ای ممکنه خیلی خیلی زیاد باشه رو مدیریت کنه . حالا webpack میتونه به عنوان ورودی میتونه این فایل ها رو بگیره و هر بلایی که شما خواستین سر اطلاعات بیاره و در خروجی اطلاعات مورد انتظار شما رو برگردونه. حالا اگر میخواین اطلاعات بیشتری در مورد webpack بدست بیارید پس حتما قسمت معرفی و راه اندازی این دوره رو مشاهده کنید. '
                },
                { 
                    id:'3',
                    prise:'20000',
                    title : 'آشنایی کامل با Angular Cli',
                    imageUrl :require('./../assets/images/angular-1.png'),
                    body : 'ابزاری است که به برنامه نویسان angular کمک میکنند تا بتوانند بهتر و راحتتر با Angular کار کنن و تمرکز کامل خود را بر روی توسعه اپلیکشن خود قرار دهند و بخش های ایجاد فایل های مختلف ، تست کدها ، مشاهده خطاهای کاربری و ... رو به Cli واگذار کنند در این دوره قصد دارم بصورت کامل استفاده از این ابزار رو به شما آموزش بدم  تا بتونید بصورت کامل با این ابزار آشنا بشید و در پروژه های خودتون ازش استفاده کنید . '
                },
                {
                    id:'4',  
                    prise:'120000',
                    title : 'ساخت یک وبسایت آموزشی (فروشگاهی) با لاراول',
                    imageUrl :require('./../assets/images/oop-cover-1.jpg'),
                    body : 'این دوره یک دوره کامل برای افرادی است که میخواهند لاراول را به درستی آموزش ببینند بعد از دوره آشنای با لاراول که بصورت رایگان در دسترس همگان قرار گرفت حالا وقت آن رسیده که در قالب یک پروژه کامل و بسیار کاربردی ، بهتر لاراول را فرا بگیرید تا بتوانید پروژه های که مد نظر خودتون هست را در پایان این دوره بنا کنید .'
                },
                {
                    id:'5',
                    prise:'70000',
                    title : 'آموزش Redux',
                    imageUrl :require('./../assets/images/reactjs.png'),
                    body : 'شاید تا به حال اسم Redux رو نشنیده باشید اما اگر با جاوااسکریپت یا فریمورک ReactJs کار کردید حتما پیشنهاد میکنم این توضیحات رو مطالعه کنید . ببینید ReactJs یک فریمورک جاوااسکریپتی ، با هدف ایجاد راحتتر UI ها ، توسط فیسبوک ایجاد شده است که واقعا هم در ایران و جهان مورد توجه خیلی از توسعه دهندگان جاوا اسکریپتی قرار گرفته. حالا در کنار این فریمورک ، فریسبوک یک مفهوم یا یک الگو ارائه داده تا یک قدم ReactJs رو فراتر از یک فریمورک معمولی بودن ببره و بشه از اون در پروژه های بزرگ هم با استفاده از این مفهوم استفاده کرد . '
                },
                {  
                    id:'6',
                    prise:'6000',
                    title : 'آموزش شی گرایی ',
                    imageUrl :require('./../assets/images/oop-cover-1.jpg'),
                    body : 'در گذشته قبل از اینکه مفهومم شی گرایی وارد زبان php بشه برنامه نویس ها مجبور بودن که php رو در کنار html استفاده کنن که این روش در پروژهای کوچیک مشکل بزرگی محسوب نمی شد اما زمانی که صحبت از ساخت برنامه های متوسط و بزرگ به میون می اومد کار یکم سخت میشد چون اینطور برنامه نویسی هر چقدر هم مدیریت شده باشه دارای کد نویسی اسپاگتی و کثیفیه که مدیریت و توسعه اش به نسبت زمانی که با استفاده از مفهوم شی گرایی برنامه نویسی میکنید خیلی دشوارتر میکنه . '
                },
            ]
        })
    }

    _renderFlatListArticle(articles)
{
    return < Product image={articles.imageUrl} title={articles.title} body={articles.body} prise={articles.prise} />
}
  
    render() {
        return (
            
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left>
                        <Icon name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500 }}/>
                    </Left>
                    <Right>
                        <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>صفحه اصلی</Text>
                    </Right>
                </Header>
                <FlatList //به مستندات جهت اطلاهات بیشتر مراجه شود
             
             data={this.state.articles}
             renderItem={({item})=>this._renderFlatListArticle(item)}
             keyExtractor={(item,index)=>item.id}
             ListEmptyComponent={()=><Spinner/>}
        //  onEndReached={}
         />
            </Container>
        )
    }


    
}