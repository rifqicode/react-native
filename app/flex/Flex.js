import React, { Component } from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';


class Flex extends Component {
  render() {
    return (
      <View style={{
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

export default Flex;
