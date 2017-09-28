import React from 'react';
import { FlatList, DrawerLayoutAndroid, Modal, StyleSheet, Switch, ToastAndroid, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, Icon, List, ListItem, Text } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.handlePressLogin = this.handlePressLogin.bind(this);
    this.handlePressRegister = this.handlePressRegister.bind(this);

    this.state = {

    };
  }

  handlePressLogin(){

  }

  handlePressRegister(){

  }

  render() {
    return (
      <View  style={{justifyContent: 'center', alignItems: 'center', top: 300}}>
        <FormLabel>Username</FormLabel>
        <FormInput onChangeText={text => this.setState({ usernameInput: text })} value={this.state.usernameInput} />
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={text => this.setState({ passwordInput: text })} value={this.state.passwordInput} />
        <Button onPress={this.handlePressLogin} buttonStyle={{width: 321, marginBottom: 10, marginTop: 10}} title='Login'/>
        <Button onPress={this.handlePressRegister} buttonStyle={{width: 321}} title='Register'/>
      </View>
    );
  }
}