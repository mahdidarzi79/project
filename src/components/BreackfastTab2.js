import React ,{Component} from 'react';
import { Container, Header, Content, Footer, CardItem, Input, Button, Text, View, Thumbnail, Card, Icon, Left, Right, Body, Title, Subtitle ,FooterTab} from 'native-base';


import {
 
  ImageBackground,StyleSheet,StatusBar,Image,FlatList,TouchableNativeFeedback,TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class BreackfastTab2 extends Component{
    componentWillMount(){
        this.setState({
            articles : [

                { 
                    id:'1',
                     prise:'85000',
                    title : '  تست کالباس و پنیر',
                    prise:'85000',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i1.jpg'),
                    body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
                },
                
                {
                    id:'2',  
                    prise:'9000',
                    title : 'املت رنگارنگ ',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i2.jpg'),
                    body : 'فلفل دلمه ای هاي رنگي-  از هر كدام يك عدد زرد، قرمز، نارنجي، سبز- را به صورت نگيني   و يك عدد پياز را هم به صورت خلالي خرد كنيد. داخل ماهيتابه يك قاشق روغن مايع اضافه كنيد و مواد خرد شده را داخل آن بريزيد همراه نمك و فلفل- به ميزان دلخواه- به مدت پنج دقيقه  تفت دهيد. حالا مواد سرخ شده را سه قسمت كرده و داخل بشقاب به صورت دايره اي قرار دهيد و روي هر كدام يك تخم مرغ شكسته  و روي تخم مرغ مقداري پودر سير بپاشيد. حالا بشقاب ها را داخل مايكروويو به مدت هفت دقيقه قرارداده و همراه نان سرو كنيد.'
                },
                { 
                    id:'3',
                    prise:'20000',
                    title : 'املت اسفناج',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i3.jpg'),
                    body : 'ابتدا 400 گرم اسفناج  را  به صورت برگ برگ كنيد. داخل ماهيتابه دو قاشق غذا خوري روغن زيتون بريزيدو  ماهيتابه را روي شعله قرار دهيد. حالا اسفناج ها را داخل ماهيتابه بريزيد چهار عدد تخم مرغ را داخل ظرفي با نمك، فلفل و پودر سير به ميزان دلخواه هم بزنيد. \n بعد از سه دقيقه كه اسفناج ها سرخ شدند تخم مرغ ها را اضافه كنيد و 100 گرم پنير صبحانه را خرد كرده و به تخم مرغ ها اضافه كنيد. درب ماهيتابه را بگذاريد؛ بعد از پنج دقيقه صبحانه شما آماده است. آن را به همراه مقداري نان سرو كنيد.                    '
                },
                {
                    id:'4',  
                    prise:'120000',
                    title : 'املت اسپانیایی',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i4.jpg'),
                    body : 'مواد مورد نياز اين املت كدو ، پياز و سير به همراه مقداري اسفناج است. يك عدد كدو را با پوست به صورت حلقه هاي خيلي نازك ببريد و يك عدد پياز كوچك را هم خلالي كنيد. يك حبه سير را رنده كنيد حالا چهار عدد تخم مرغ را داخل ظرفي ريخته و به ميزان دلخواه به آن نمك ، فلفل و آويشن اضافه كنيد و خوب هم بزنيد.   '
                },
                {
                    id:'5',
                    prise:'70000',
                    title : ' املت فلفل سبز و سیب زمینی',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i4.jpg'),
                    body : 'سه عدد سیب زمینی را نگینی  و فلفل سبز دلمه ای  و پیاز را ریز خرد کنید. داخل ماهیتابه دو قاشق غذا خوری روغن مایع بریزید و سیب زمینی را کمی تفت دهید تا نرم شود و از ماهیتابه بردارید. به میزان دلخواه نمک و فلفل و مقداری پودر سیر اضافه کنید و  سه عدد گوجه فرنگی پوره شده  را در تابه تفت دهید حالا نوبت اضافه کردن فلفل دلمه ای است. همه مواد را با ۱۰۰ گرم پنیر پیتزای رنده شده مخلوط کنید و در ظرف هایی که برای هر نفر آماده کرده اید بریزید و روی هر ظرف یک عدد تخم مرغ بشکنید.  روی تخم مرغ ها مقداری پودر فلفل سیاه بپاشید و برای طعم دار کردن می توانید ازچند برگ جعفری یا گشنیز تازه استفاده کنید. املت برای سرو کردن همراه با نان تفت داده شده آماده است.'
                },
                {  
                    id:'6',
                    prise:'6000',
                    title : ' املت گوجه و ریحان ',
                    imageUrl :require('./../assets/images/breackfast/middeleprise/i5.jpg'),
                    body : 'سه عدد گوجه فرنگی را به صورت حلقه حلقه ببرید و ۲۰۰ گرم ریحان را برگ برگ کنید. یک حبه سیر را رنده کنید و یک قاشق روغن زیتون به آن اضافه کنید. سه کاسه کوچک بردارید و داخل هر کدام یک قاشق روغن زیتون بریزید و تکان دهید تا تمام ظرف به روغن آغشته شود  سه عدد تخم مرغ را داخل ظرفی بشکنید و همراه نمک و فلفل خوب هم بزنید. داخل کاسه ها یک لایه گوجه حلقه شده، چند برگ ریحان، مقداری سیر رنده شده و مقداری تخم مرغ  بریزید و این کار را تکرار کنید تا کاسه ها پر شوند. فر را با دمای٢٠٠ درجه سانتی گراد روشن کنید و کاسه ها را به مدت ۱۰ دقیقه در آن قرار دهید. صبحانه شما با سه عدد نان تست آماده سرو است.'
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