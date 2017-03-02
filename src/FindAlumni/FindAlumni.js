import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import SchoolSearch from './SchoolSearch';
import IndustrySearch from './IndustrySearch';

export default class FindAlumni extends Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: 'Find Alumni',
    header: {
        style: {
            backgroundColor: '#1a91cb',
        },
        tintColor: 'white'
    }
  };
  
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
        <ScrollableTabView
            style={styles.container}
            tabBarBackgroundColor='#1a91cb'
            tabBarActiveTextColor='#fff'
            tabBarInactiveTextColor='#fff'
            tabBarUnderlineStyle={{backgroundColor: 'white'}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
        >
            <SchoolSearch tabLabel='School' />
            <IndustrySearch tabLabel='Industry' />
        </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#f9f9f9'
  }
});
