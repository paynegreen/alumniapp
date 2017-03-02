import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Picker,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class IndustrySearch extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         language: 'English'
    //     }
    // }
    render(){
        return(
            <KeyboardAvoidingView
                behavior='position' 
                style={styles.container}
            >
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../img/industry.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Name of Industry'
                        placeholderTextColor='rgba(0,0,0,0.3)'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Year of Company'
                        placeholderTextColor='rgba(0,0,0,0.3)'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Name of Alumni'
                        placeholderTextColor='rgba(0,0,0,0.3)'
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Find Alumni</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon: {
        width: 150,
        height: 150,
    },
    iconContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(230,230,230,0.5)',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    buttonContainer: {
        backgroundColor: '#53d86a',
        paddingVertical: 15,
        borderRadius: 15,
        marginTop: 20
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff'
    }
});