import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    ListView,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, ListItem, Button } from 'react-native-elements';
import Spinner from 'react-native-spinkit';

const { width, height } = Dimensions.get('window');

export default class Events extends Component {
    
    fetchData() {
        fetch('https://tsatsu.herokuapp.com/api/v1/service/AlumniAPp/db?table=events', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'devless-token': '96d7e7d3ac9fa25396acdcbf07cc0750',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // return responseJson.payload.results;
            this.setState({
                data: responseJson.payload.results,
                loading: true
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    constructor(){
        super();
        
        this.fetchData();

        this.state = {
            data: [],
            loading: false
        }
    }
    
    static navigationOptions = {
        title: 'Events',
        header: {
            style: {
                backgroundColor: '#1a91cb',
            },
            tintColor: 'white'
        }
    };

    _handleClick(url){
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    }

    render(){
        if( this.state.loading === true)
            return(
                
                <ScrollView>
                    {
                        this.state.data.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    title={item.name}
                                    titleStyle={styles.title}
                                    image={{uri: item.description}}
                                    imageStyle={{width: 350, height: 150}}>
                                    <Text style={{marginBottom: 10}}>
                                        {item.description}
                                    </Text>
                                    <Button
                                        icon={{name: 'event'}}
                                        backgroundColor='#03A9F4'
                                        buttonStyle={styles.buttonStyle}
                                        title='VIEW EVENT' 
                                        onPress={() => this._handleClick(item.url)} />
                                </Card>
                            )
                        })
                    }
                </ScrollView>
            );
        else
            return(
                <View style={styles.spinContainer}>
                    <Spinner 
                        isVisible={true/*this.state.isVisible}*/}
                        type='FadingCircle'
                        color='#1a91cb'
                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    title: {
        alignSelf: 'flex-start'
    },
    spinContainer: {
        flex: 1, 
        backgroundColor: '#f9f9f9',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0, 
        borderRadius: 5
    }
})