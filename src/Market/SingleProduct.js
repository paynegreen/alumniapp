import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const { width, height } = Dimensions.get('window');

export default class SingleProduct extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    };

    static navigationOptions = {
        title: 'Details',
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
            <ScrollView style={{ backgroundColor: '#f9f9f9' }}>
                <View style={styles.gridView}>
                    <Text style={styles.titleText}>
                        Unpleasant astonished an diminution
                    </Text>
                    <Image 
                        source={require('../img/shoe1.jpg')}
                        style={{ width: width, height: height/2.8}}
                    />
                    <View>
                        <Text style={styles.description}>
                            Description
                        </Text>
                        <Text style={styles.descriptionText}>
                            Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows.
                        </Text>
                        <View style={styles.detailFooter}>
                            <View style={styles.footerElement}>
                                <Text style={styles.footerText}> GHS {params.data.price}</Text>
                            </View>
                            <TouchableOpacity 
                                onPress={() => this.handleClick('tel:'+params.data.phone)}
                                style={styles.contact}
                            >
                                <Text style={styles.contactText}>Contact Seller</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 16,
        paddingTop: 25,
        paddingLeft: 10,
        color: '#4D4E69',
        fontWeight: '700',
        paddingBottom: 25,
    },
    description: {
        fontSize: 16,
        paddingTop: 10, 
        paddingLeft: 10,
        color: '#4D4E69',
        paddingBottom: 5, 
        fontWeight: 'bold',
    },
    descriptionText: {
        height: 160,
        paddingLeft: 10,
        color: '#4D4E69',
    },
    detailFooter:{
        flex: 2,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    footerElement: {
        width: 140,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#e4e4e4',
    },
    footerText: {
        top: 20,
        bottom: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A80028'
    },
    contact: {
        width: 180,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e4e4e4',
        backgroundColor: '#53D86A',
    },
    contactText: {
        top: 20,
        bottom: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});