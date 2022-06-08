import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        marginRight:3,
        marginBottom:3,
        marginTop: 40

    },
    taskContainer:{
        backgroundColor:'#3e3364',
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:10,
        paddingVertical:5,
        minHeight:50,
    },
    index:{
        color:'#fff',
        fontSize:16,
        marginLeft:10,
        marginRight:10

    },
    task:{
        color:'#fff',
        width:"70%",
        fontSize:16
        
    },
    delete:{
        marginLeft:10,
        color:'#fff',
        fontSize:20,
    }
})