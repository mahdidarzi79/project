import {  Platform , StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    main : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    loginBox : {
        backgroundColor: 'white',
        flex : 1,
        marginRight : 50,
        marginLeft : 50,
        borderRadius : 5,
        elevation : 2,
        shadowColor : 'black' ,
        shadowOffset : { width : 0 , height: 2},
        shadowOpacity : .1,
        paddingBottom:20
    },
    loginTitle : {
        ...Platform.select({
            ios : {
                fontFamily : 'IRANSansMobile',
                fontWeight : "bold"
            } ,
            android : {
                fontFamily : 'IRANSansMobile_Bold',
            }
        }),
        margin : 2,
        textAlign : 'center',
        fontSize : 18,
        paddingTop : 10,
        paddingBottom :10
    },
    inputGroups : {
        margin : 5,
        marginRight: 20,
        marginLeft: 20
    },
    labelText : {
        textAlign: 'right',
        marginBottom : 10,
        color : '#5256c9',
        ...Platform.select({
            ios : {
                fontFamily : 'IRANSansMobile',
                fontWeight : "500"
            } ,
            android : {
                fontFamily : 'IRANSansMobile_Medium',
            }
        }),
    },
    inputText : {
        fontFamily : 'IRANSansMobile',
        textAlign : 'right',
        borderColor : 'rgba(0,0,0,.1)',
        borderWidth : 1,
        padding : 10,
        borderRadius: 2,
        height: 40,
        fontSize : 12
    },
    loginButton : {
        fontFamily : 'IRANSansMobile',
        marginRight : 25,
        marginLeft : 25,
        backgroundColor : '#426bd7',
        textAlign : 'center',
        padding: 10,
        borderRadius : 20,
        color : 'white',
        marginTop : 15,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0 , height : 2},
        shadowOpacity: .1,
        overflow : 'hidden'
    },
    loginButtonH : {
        marginRight : 25,
        marginLeft : 25,
        backgroundColor : '#426bd7',
        padding: 10,
        borderRadius : 20,
        marginTop : 15,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0 , height : 2},
        shadowOpacity: .1,
        overflow : 'hidden'
    },
    loginButtonHText : {
        fontFamily : 'IRANSansMobile',
        textAlign : 'center',
    },
    forgetPassword : {
        fontFamily : 'IRANSansMobile',
        textAlign : 'center',
        marginTop: 15
    }
});


export default styles;