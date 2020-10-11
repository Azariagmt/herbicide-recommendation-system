import {
    StyleSheet,
    Dimensions
} from "react-native"

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        paddingHorizontal: 45,
        paddingVertical: 20,
        marginHorizontal: 30,
        backgroundColor: '#000',
        borderRadius: 155
    },
    submit: {
        borderRadius: 13,
        backgroundColor: "#4BB543",
        justifyContent: 'center',
        height: 50,
        marginTop: 25,
        marginBottom: 15,
        marginHorizontal: 200
    },
    cancel: {
        borderRadius: 5,

    },
    caption: {
        paddingHorizontal: 30,
        fontSize: 20,
        textAlign: "center"
    },
    text: {
        padding: "20%",
        color: "white",
        textAlign: "center"
    },
    title: {
        paddingHorizontal: "20%",
        color: "black",
        fontSize: 45,
        textAlign: "center"
    },
    subtitle: {
        paddingHorizontal: "20%",
        color: "grey",
        fontSize: 30,
        textAlign: "center"
    },
    imagePreview: {
        height: 410,
        width: 280,
        backgroundColor: 'grey',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginHorizontal: Dimensions.get('window').width / 3,
        marginVertical: 30,
        borderWidth: 1,
        borderColor: '#003'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(247, 247, 247, 0.98)",
        height: 600,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: Dimensions.get('window').height/7,
        marginLeft: 40,
    },
    modalText: {
        padding: "20%",
        color: "black",
        textAlign: "center"
    }
})

export default styles