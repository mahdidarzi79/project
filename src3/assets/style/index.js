import { StyleSheet , Platform } from 'react-native';

export default styles = StyleSheet.create({
    headerTitleStyle : {
        ...Platform.select({
            ios : {
                fontFamily : 'IRANSansMobile',
                fontWeight : "bold"
            } ,
            android : {
                fontFamily : 'IRANSansMobile_Bold',
            }
        }),
        fontSize : 18,
        color : '#333',
        margin : 10
    }
})