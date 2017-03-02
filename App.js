import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Terms from './src/Terms/Terms';
import Market from './src/Market/Market';
import Events from './src/Events/Events';
import Settings from './src/Settings/Settings';
import { StackNavigator } from 'react-navigation';
import FindAlumni from './src/FindAlumni/FindAlumni';
import SingleProduct from './src/Market/SingleProduct';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: {
        style: {
            backgroundColor: '#1a91cb',
        },
        tintColor: 'white'
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.touchGrids}>
                <TouchableOpacity 
                    style={styles.touchGrid}
                    onPress={() => navigate('Find')}
                >
                    <Image
                        style={styles.imageIcon}
                        source={require('./src/img/student.png')}
                    />
                    <Text style={styles.textGrid}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.touchGrid}
                    onPress={() => navigate('Events')}
                >
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/calendar.png')}
                    />
                    <Text style={styles.textGrid}>Events</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.touchGrids}>
                <TouchableOpacity 
                    style={styles.touchGrid}
                    onPress={() => navigate('Market')}
                >
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/cart.png')}
                    />
                    <Text style={styles.textGrid}>Market</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchGrid}>
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/message.png')}
                    />
                    <Text style={styles.textGrid}>Forum</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.touchGrids}>
                <TouchableOpacity 
                    style={styles.touchGrid}
                    onPress={() => navigate('Settings')}
                >
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/settings.png')}
                    />
                    <Text style={styles.textGrid}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchGrid}>
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/megaphone.png')}
                    />
                    <Text style={styles.textGrid}>Adverts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.touchGrids}>
                <TouchableOpacity 
                    style={styles.touchGrid}
                    onPress={() => navigate('Terms')}
                >
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/notepad.png')}
                    />
                    <Text style={styles.textGrid}>Terms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchGrid}>
                    <Image
                        style={styles.imageIcon} 
                        source={require('./src/img/logout.png')}
                    />
                    <Text style={styles.textGrid}>Logout</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
  }
}

const alumniapp = StackNavigator({
  Home: { screen: HomeScreen },
  Events: { screen: Events},
  Terms: { screen: Terms },
  Market: { screen: Market},
  Find: { screen: FindAlumni },
  Settings: { screen: Settings },
  SingleProduct: {screen: SingleProduct}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    touchGrids: {
        paddingTop: 15,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    touchGrid: {
        borderWidth: 2,
        height: 120,
        width: 150,
        alignItems: 'center',
        borderColor: '#e4e4e4',
        borderRadius: 10
    },
    textGrid: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        flexDirection: 'column',
        alignItems: 'stretch',
        color: '#1a91cb'
    },
    imageIcon: {
        width: 60, 
        height: 60,
        marginTop: 20,
        marginBottom: 10 
    }

});

AppRegistry.registerComponent('alumniapp', () => alumniapp);