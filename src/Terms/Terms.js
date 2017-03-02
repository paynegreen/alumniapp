import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const HTML = `
<p>Terms and Conditions</p>
`;

export default class Terms extends Component {
    static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: 'Terms & Conditions',
    header: {
        style: {
            backgroundColor: '#1a91cb',
        },
        tintColor: 'white'
        }
    };

    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <View style={styles.viewBorder}>
                    <Text>
                        Terms & Conditions
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    viewBorder: {
        flex: 1, 
        margin: 5, 
        borderWidth: 2, 
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)', 
    }
})