import React , { Component } from 'react';
import Article from "./Article";
import { ScrollView , ListView , FlatList , StyleSheet , StatusBar , View ,Text, SectionList } from "react-native";
import Header from "./Header";

export default class Articles extends Component {
    componentWillMount() {
        this.setState({
            articles : [
                {
                    title : 'آموزش پروژه محور React Native',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
                    body : 'یک فریم ورک جاوا اسکریپت برای ساختن برنامه های موبایلِ native است. این فریم ورک از فریم ورکِ React استفاده می کنه و APIها و کامپوننت های تعبیه شده ی داخلیِ زیادی داره. در گذشته شما با Javascript تنها میتوانستید بخش Frontend وبسایت های خودتان رو بوجود بیاورید، اما با پیشرفت روز افزون Javascript امروزه میتوانید سمت سرور هم با javascript کد نویسی کنید یا حتی میتوانید اپلیکیشن های اندرویدی یا ios را تنها با javascript بوجود بیاورید. در این دوره میخواهیم با یکی از جدیدترین تکنولوژی های که به ما امکان ایجاد اپلیکیشن های اندرویدی یا ios را با جاوا اسکریپت میدهد بصورت کامل آشنا بشویم . '
                },
                {
                    title : 'آموزش webpack',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/27/webpack.jpg'},
                    body : 'در این دوره قصد دارم webpack که یک module bundler برای جاوا اسکریپت هست رو به شما آموزش بدم . حالا module bundler چیه ؟ در جاوا اسکریپت همیشه احساس نیاز به ابزاری میشد که بتونه فایل های مختلفی مثل جاوا اسکریپت , تصاویر , فونت ها و موارد دیگه که تعدادشون هم در هر پروژه ای ممکنه خیلی خیلی زیاد باشه رو مدیریت کنه . حالا webpack میتونه به عنوان ورودی میتونه این فایل ها رو بگیره و هر بلایی که شما خواستین سر اطلاعات بیاره و در خروجی اطلاعات مورد انتظار شما رو برگردونه. حالا اگر میخواین اطلاعات بیشتری در مورد webpack بدست بیارید پس حتما قسمت معرفی و راه اندازی این دوره رو مشاهده کنید. '
                },
                {
                    title : 'آشنایی کامل با Angular Cli',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/7/26/angular-1.png'},
                    body : 'ابزاری است که به برنامه نویسان angular کمک میکنند تا بتوانند بهتر و راحتتر با Angular کار کنن و تمرکز کامل خود را بر روی توسعه اپلیکشن خود قرار دهند و بخش های ایجاد فایل های مختلف ، تست کدها ، مشاهده خطاهای کاربری و ... رو به Cli واگذار کنند در این دوره قصد دارم بصورت کامل استفاده از این ابزار رو به شما آموزش بدم  تا بتونید بصورت کامل با این ابزار آشنا بشید و در پروژه های خودتون ازش استفاده کنید . '
                },
                {
                    title : 'ساخت یک وبسایت آموزشی (فروشگاهی) با لاراول',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/cms-laravel-cover-1.jpg'},
                    body : 'این دوره یک دوره کامل برای افرادی است که میخواهند لاراول را به درستی آموزش ببینند بعد از دوره آشنای با لاراول که بصورت رایگان در دسترس همگان قرار گرفت حالا وقت آن رسیده که در قالب یک پروژه کامل و بسیار کاربردی ، بهتر لاراول را فرا بگیرید تا بتوانید پروژه های که مد نظر خودتون هست را در پایان این دوره بنا کنید .'
                },
                {
                    title : 'آموزش Redux',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/8/9/react-native.png'},
                    body : 'شاید تا به حال اسم Redux رو نشنیده باشید اما اگر با جاوااسکریپت یا فریمورک ReactJs کار کردید حتما پیشنهاد میکنم این توضیحات رو مطالعه کنید . ببینید ReactJs یک فریمورک جاوااسکریپتی ، با هدف ایجاد راحتتر UI ها ، توسط فیسبوک ایجاد شده است که واقعا هم در ایران و جهان مورد توجه خیلی از توسعه دهندگان جاوا اسکریپتی قرار گرفته. حالا در کنار این فریمورک ، فریسبوک یک مفهوم یا یک الگو ارائه داده تا یک قدم ReactJs رو فراتر از یک فریمورک معمولی بودن ببره و بشه از اون در پروژه های بزرگ هم با استفاده از این مفهوم استفاده کرد . '
                },
                {
                    title : 'آموزش شی گرایی php',
                    imageUrl : { uri : 'https://roocket.ir/public/image/2017/6/13/oop-cover-1.jpg'},
                    body : 'در گذشته قبل از اینکه مفهومم شی گرایی وارد زبان php بشه برنامه نویس ها مجبور بودن که php رو در کنار html استفاده کنن که این روش در پروژهای کوچیک مشکل بزرگی محسوب نمی شد اما زمانی که صحبت از ساخت برنامه های متوسط و بزرگ به میون می اومد کار یکم سخت میشد چون اینطور برنامه نویسی هر چقدر هم مدیریت شده باشه دارای کد نویسی اسپاگتی و کثیفیه که مدیریت و توسعه اش به نسبت زمانی که با استفاده از مفهوم شی گرایی برنامه نویسی میکنید خیلی دشوارتر میکنه . '
                },
            ]
        })
    }

    _renderArticle(article) {
        return <Article navigation={this.props.navigation} image={article.imageUrl} title={article.title} body={article.body}/>
    }

    render() {
        return (
            <View style={{ flex : 1}}>
                <StatusBar
                    hidden
                />
                <FlatList
                    data={this.state.articles}
                    renderItem={({ item }) => this._renderArticle(item)}
                    keyExtractor={(item , index) => index}
                    numColumns={2}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        margin : 10
    }
})