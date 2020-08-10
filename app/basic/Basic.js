import React, { Component, useState } from 'react';
import {
  Text, View, StyleSheet,
  Image, ScrollView, TextInput,
  SectionList, Button, FlatList
} from 'react-native';

class Basic extends Component {
  render() {
    return (
      <View style={style.center}>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
               style={{ width: 200, height: 200 }}
        />

        <Text>Hello my name is rifqi!</Text>
        <AskMe />
      </View>
    );
  }
}

class AskMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: ''
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(e) {
    if (this.state.text) {
      this.setState({
        items: [...this.state.items, this.state.text],
        text: ''
      })
    }
  }

  render() {
    return (
      <View style={style.askMe}>
        <TextInput style={style.input}
                   placeholder="Ask me anything......"
                   keyboardType="number-pad"
                   onChangeText={(text) => this.setState({text: text})}
                   defaultValue={this.state.text}
        />

        <Button
          title="Ask" style={style.button}
          onPress={this.onClickHandler}
        />

        <List data={this.state.items}/>
      </View>
    )
  }
}

const List = (props) => {
  return (
    <View style={{
     flex: 1,
     paddingTop: 22
    }}>
      <FlatList
        data={props.data}
        renderItem={({item}) => <Text style={{
          padding: 10,
          fontSize: 18,
          height: 44,
        }}> * {item} </Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const style = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    top: 10
  },
  askMe: {
    padding: 50
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 300,
  },
  button : {
    top: 100,
  },
  margintop: {
    top: 50
  }
});

export default Basic;
