/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import Appconfig from './config';
import AlbumList from './component/albumlist';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class babyinstant extends Component {
  render() {
    var titleConfig = {
      title:'全部'
    }
    var rightbutton = {
      title:'我',
      handler:() => alert('111111'),
    }
    return (
      <View>
        <View style = {{ flex : 1,}}>
           <NavigationBar
              title = { titleConfig }
              rightButton = { rightbutton } />     
        </View>
        <View style = {styles.albumlist}>
          <AlbumList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  albumlist:{
    backgroundColor:'#666'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('babyinstant', () => babyinstant);
