import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    titleDescription: {
        fontSize: 15,
        marginTop: 7
    },
    input: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        borderRadius: 7,
        marginVertical: 7
    },
    containerForm: {
        marginVertical: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: 15
    },
    textRedirect: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 15
    },
    titleProduct: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    imageProduct: {
        width: 70,
        height: 70
    },
    iconCart: {
        flex: 1,
        alignItems: 'flex-end',
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    contentModal: {
        padding: 20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10
    },
    titleModal: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000'
    },
    imageModal: {
        width: 150,
        height: 150,
        marginTop: 5
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 16,
        color: '#000'
    },
    buttonCart:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical:10,
        borderRadius:5,
        alignItems:'center',
        marginTop:10
    },
    buttonCartText:{
        color:SECONDARY_COLOR,
        fontWeight:'bold'
    },
    textStock:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'red'
    },
    headerHome:{
        flexDirection:'row',
        alignItems:'center'
    },
    textIconCar:{
        backgroundColor:SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius:10,
        fontSize:12,
        fontWeight:'bold'
    },
    headerTable:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerDescription:{
        flexDirection:'row',
    },
    textHeaderTable:{
        fontWeight:'bold',
        color:'#000'
    },
    containerTotal:{
        alignItems:'flex-end',
        marginVertical:15,
        marginRight:10
    },
    textTotal:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000'
    }
})