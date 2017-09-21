import React from 'react';
import {  View, Text } from 'react-native';
import axios from 'axios';

//const api = 'http://192.168.0.23:3009';

export default class App extends React.Component {
  constructor(props, ctx){
    super(props, ctx);

  }

  render(){
    return(
      <View style={styles.mainView}>
        <Text>Hello there</text>
      </View>       
    );
  }

}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      marginTop: 70
    }
})
