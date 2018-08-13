import EStyleSheet from 'react-native-extended-stylesheet';

export const form = EStyleSheet.create({
   StyleForm : {
       padding: 20
   },
    item : {
        borderRadius : 5,
        marginBottom:10,
        paddingRight:10,
        paddingLeft: 10
    },
    input : {
       fontFamily: '$IS',
        fontSize:14
    },
    submitButton : {
       borderRadius: 5,
        backgroundColor: '$statusBarColor'
    },
    submitText : {
       fontSize : 16,
        fontFamily : '$IS'
    },
    error : {
       fontFamily : '$IS',
        fontSize:12 ,
        color : '#ed2f2f',
        marginBottom: 10
    }
});

export const drawer = EStyleSheet.create({
   container :{
       flex: 1
   },
    imageHeader : {
        height : 180 ,
        width : '100%'
    },
    item : {
        justifyContent: 'flex-end' ,
        padding: 10
    },
    itemTitle : {
       fontFamily : '$IS'
    },
    itemIcon : {
       marginLeft: 10
    }
});

export const index = EStyleSheet.create({
    splashContainer : {
        flex: 1 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        backgroundColor : '#34495e'
    },
    splashText : {
        color : 'white',
        fontSize : 18,
        fontFamily : '$IS'
    }
});


export default styles = {
    index
};