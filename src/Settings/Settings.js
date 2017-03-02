import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const { width, height } = Dimensions.get('window');

export default class Settings extends Component {
    constructor(){
        super();

        this.state = {
            keyboard: 'height'
        }
    }

    adjustKeyboard(){
        this.setState({
            keyboard: 'position'
        })
    }

    static navigationOptions = {
        title: 'Home',
        header: {
            style: {
                backgroundColor: '#1a91cb',
            },
            tintColor: 'white'
        }
    };

    render(){
        const { navigate } = this.props.navigation;

        return(
            <KeyboardAvoidingView
                behavior={this.state.keyboard} 
                style={styles.container}
            >    
            
                <Image
                    style={styles.image}
                    source={require('../img/mortarboard.png')}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Full Name'
                        returnKeyType='next'
                        onSubmitEditing={() => this.emailInput.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder='Email'
                        returnKeyType='next'
                        ref={(input) => this.emailInput = input}
                        onEndEditing={() => this.adjustKeyboard()}
                        onSubmitEditing={() => this.nicknameInput.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nickname'
                        returnKeyType='next'
                        ref={(input) => this.nicknameInput = input}
                        onSubmitEditing={() => this.dobInput.focus()}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Date of Birth'
                        ref={(input) => this.dobInput = input}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='School'
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numbers-and-punctuation'
                        placeholder='Year of Completion'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Course of Study'
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Update Profile</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1992CC',
    },
    image: {
        tintColor: 'white',
        alignSelf: 'center',
        width: width/2.5,
        height: height/4.45,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        padding: height/33
    },
    input: {
        height: height/16.68,
        backgroundColor: 'rgba(230,230,230,0.5)',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    button: {
        padding: 21,
        backgroundColor: '#53D86A'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});