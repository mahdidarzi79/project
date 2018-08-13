import React , { Component } from 'react';
import { View , Image , Text , StyleSheet , Platform , Dimensions , TouchableWithoutFeedback} from 'react-native';

export default class Article extends Component {

    render() {
        const { title , image , body } = this.props;
       
        return (
            <TouchableWithoutFeedback onPress={() =>this.props.navigation.navigate('Article' , {
                article : {
                    title , image , body
                }
            })}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View style={{ padding : 10}}>
                        <Text style={styles.title}>{title}</Text>
                        <Text numberOfLines={5} style={styles.body}>{body}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const { width , height } = Dimensions.get('window');
const gutter = 10;

const styles = StyleSheet.create({
    // container : {
    //     width : ( width - gutter * 3) / 2,
    //     backgroundColor : 'white',
    //     elevation : 1,
    //     shadowColor : '#000',
    //     shadowOffset : { width : 0 , height: 20},
    //     shadowOpacity : .2,
    //     marginBottom : 10,
    //
    // },

    container : {
        flex : .5,
        margin: 5,
        backgroundColor : 'white',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
    },
    image : {
        width : '100%',
        height: 120
    },
    title : {
        fontSize : 16,
        ...Platform.select({
            ios : {
                fontFamily : 'IRANSansMobile',
                fontWeight : "bold",
                textAlign : 'left'
            } ,
            android : {
                fontFamily : 'IRANSansMobile_Bold',
            }
        }),

    },
    body : {
        fontFamily : 'IRANSansMobile',
        fontSize : 12,
        ...Platform.select({
            ios : {
                textAlign : 'left'
            }
        })
    }
});