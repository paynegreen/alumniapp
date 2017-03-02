import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
// import SingleProduct from './SingleProduct';

const list = [
            {
                key: 1,
                name: 'Amy Farha',
                avatar_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
                subtitle: 'Vice President',
                price: '34,567.85',
                detail: 'SingleProduct',
                phone: '0204424321'
            },
            {
                key: 2,
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                price: '5,690.00',
            },
            {
                key: 3,
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                price: '34,567.85',
            },
            {
                key:42,
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                price: '5,690.00',
            },
            {
                key: 5,
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                price: '34,567.85',
            },
            {
                key:9,
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                price: '5,690.00',
            },
            {
                key: 7,
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                price: '34,567.85',
            },
            {
                key: 23,
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                price: '5,690.00',
            },
        ];

export default class Market extends Component {
    static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: 'Market',
    header: {
        style: {
            backgroundColor: '#1a91cb',
        },
        tintColor: 'white'
        }
    };

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(list),
        };
    }

    render(){
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID) => 
                    <TouchableOpacity>
                        <ListItem
                            key={sectionID}
                            title={rowData.name}
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.ratingText}>{rowData.subtitle}</Text>
                                    <Text style={styles.priceText}>GHS {rowData.price}</Text>
                                </View>
                            }
                            avatar={{uri:rowData.avatar_url}}
                            avatarStyle={{height: 70, width: 70}}
                            onPress={() => navigate('SingleProduct', {data: rowData})}
                        />
                    </TouchableOpacity>
                }
                style={{backgroundColor: '#f9f9f9'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 5
    },
    timeText: {
        alignSelf: 'flex-end'
    },
    ratingText: {
        color: 'grey'
    },
    priceText: {
        color: '#A80028',
        fontWeight: '600'
    }
});
