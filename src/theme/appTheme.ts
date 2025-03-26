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
    }
})