import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

//estilos globales
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInputs: {
        marginTop: 40,
        gap: 10
    },
    button: {
        marginTop:30,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:20
    }

})