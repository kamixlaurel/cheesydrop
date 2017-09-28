<<<<<<< HEAD
import React from 'react';
import { FlatList, DrawerLayoutAndroid, Image, Modal, StyleSheet, Switch, ToastAndroid, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, Icon, List, ListItem, Text } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.handlePressLogin = this.handlePressLogin.bind(this);

    this.state = {
      loginVisible: true,
      registerVisible: false
    };
  }

  handlePressLogin(){

  }

  render() {
    return (
      <View>
        <Modal visible={this.state.loginVisible} onRequestClose={() => this.setState({ loginVisible: true})}>
          <View style={{backgroundColor: '#f3f3f3', height: 800}}>
            <Image source={require('./login.jpg')} style={{ width: 360, height: 450, left: 0, top: 80}}/>
            <Button onPress={this.handlePressLogin} buttonStyle={{width: 301, marginBottom: 10, top: 10, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a' title='Login'/>
            <FormInput onChangeText={text => this.setState({ usernameInput: text })} value={this.state.usernameInput} style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, fontWeight: 'bold', top: -155}} underlineColorAndroid='transparent'/>
            <FormInput onChangeText={text => this.setState({ passwordInput: text })} value={this.state.passwordInput} style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, top: -137, marginBottom: -100}} underlineColorAndroid='transparent'/>
            <View style={{height: 200, width: 195, top: -25}}>
              <Button onPress={() => this.setState({registerVisible: true, loginVisible: false})} buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a'title='Register as Driver'/>
            </View>
            <View style={{height: 200, width: 195, top: -225, left: 160}}>
              <Button onPress={() => this.setState({registerVisible: true, loginVisible: false})} buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a'title='Register as Parent'/>
            </View>
          </View>
        </Modal>

        <Modal visible={this.state.registerVisible} onRequestClose={() => this.setState({ loginVisible: true, registerVisible: false})}>
          <View style={{backgroundColor: '#f3f3f3', height: 800}}>
            <Image source={require('./white.jpg')} style={{ width: 360, height: 450, left: 0, top: 100}}/>
          </View>
        </Modal>
      </View>
    );
  }
}
=======
import React from 'react';
import { FlatList, DrawerLayoutAndroid, Image, Modal, StyleSheet, Switch, ToastAndroid, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, Icon, List, ListItem, Text } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.handlePressLogin = this.handlePressLogin.bind(this);

    this.state = {
      loginVisible: true,
      registerVisible: false
    };
  }

  handlePressLogin(){

  }

  render() {
    return (
      <View>
        <Modal visible={this.state.loginVisible} onRequestClose={() => this.setState({ loginVisible: true})}>
          <View style={{backgroundColor: '#f3f3f3', height: 800}}>
            <Image source={require('./login.jpg')} style={{ width: 360, height: 450, left: 0, top: 80}}/>
            <Button onPress={this.handlePressLogin} buttonStyle={{width: 301, marginBottom: 10, top: 10, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a' title='Login'/>
            <FormInput onChangeText={text => this.setState({ usernameInput: text })} value={this.state.usernameInput} style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, fontWeight: 'bold', top: -155}} underlineColorAndroid='transparent'/>
            <FormInput onChangeText={text => this.setState({ passwordInput: text })} value={this.state.passwordInput} style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, top: -137, marginBottom: -100}} underlineColorAndroid='transparent'/>
            <View style={{height: 200, width: 195, top: -25}}>
              <Button onPress={() => this.setState({registerVisible: true, loginVisible: false})} buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a'title='Register as Driver'/>
            </View>
            <View style={{height: 200, width: 195, top: -225, left: 160}}>
              <Button onPress={() => this.setState({registerVisible: true, loginVisible: false})} buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} color= '#4a4a4a'title='Register as Parent'/>
            </View>
          </View>
        </Modal>

        <Modal visible={this.state.registerVisible} onRequestClose={() => this.setState({ loginVisible: true, registerVisible: false})}>
          <View style={{backgroundColor: '#f3f3f3'}}>
            <View style={{backgroundColor: '#f3f3f3', height: 450, top: 0}}>
              <Image source={require('./register.jpg')} style={{ width: 360, height: 550, left: 0, top: 0}}/>
              <FormInput onChangeText={text => this.setState({ usernameInput: text })} value={this.state.usernameInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, fontWeight: 'bold', top: -315}} underlineColorAndroid='transparent'/>
              <FormInput onChangeText={text => this.setState({ nameInput: text })} value={this.state.nameInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, fontWeight: 'bold', top: -295}} underlineColorAndroid='transparent'/>
              <FormInput onChangeText={text => this.setState({ passwordInput: text })} value={this.state.passwordInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, fontWeight: 'bold', top: -276}} underlineColorAndroid='transparent'/>
              <FormInput onChangeText={text => this.setState({ codeInput: text })} value={this.state.codeInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, fontWeight: 'bold', top: -260}} underlineColorAndroid='transparent'/>
            </View>
            <View style={{backgroundColor: '#f3f3f3', height: 300, top: 10}}>
              <Button onPress={() => this.setState({registerVisible: false, loginVisible: true})} buttonStyle={{height: 35, width: 295, left:16, backgroundColor: '#ebcc21', top: 0}} color= '#4a4a4a'title='Sign Up'/>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
>>>>>>> 97038d7e4b8b5a6599477290665691b7b3e961e4
