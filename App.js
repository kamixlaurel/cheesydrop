import React from 'react';
import { FlatList, DrawerLayoutAndroid, Image, Modal, StyleSheet, Switch, ToastAndroid, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, Icon, List, ListItem, Text } from 'react-native-elements';
import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';

export default class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.handlePressLogin = this.handlePressLogin.bind(this);

    this.state = {
      loginVisible: true,
      registerVisible: false,
      driverVisible: false,
      profileDriverVisible: false,
      mapDriverNotReadyVisible: false,
      mapDriverReadyVisible: false,
      registerAs: null,
    };
  }

  handlePressLogin(){
    this.setState({
      driverVisible: true,
      mapDriverNotReadyVisible: true
    })
  }

  render() {
    {/* DRAWER VIEW */ }
    var navigationView = (
      <View style={{backgroundColor: 'white'}}>
        <View style={{ height: 100, borderColor: '#ebcc21', borderBottomWidth: 2}}>
          <Text style={{ top: 20, left: 5, fontSize: 35 }}> Mister Meeseeks </Text>
          <Text style={{ top: 20, left: 10, fontSize: 15 }}> Monday, 7:30 AM </Text>
        </View>
        <View style={{height: 450, borderColor: '#ebcc21', borderBottomWidth: 2}}>
          <Text style={{ marginTop: 10, left: 10, fontSize: 18 }}> Morty Sanchez </Text>
          <Text style={{ marginTop: 2, left: 11, fontSize: 12, color: '#595858' }}> READY </Text>
          <Text style={{ marginTop: 5, left: 10, fontSize: 18 }}> Pee Nhut </Text>
          <Text style={{ marginTop: 2, left: 11, fontSize: 12, color: '#595858'}}> PREPARING </Text>
          <Text style={{ marginTop: 5, left: 10, fontSize: 18, textDecorationLine: 'line-through' }}> Enn Jelli </Text>
          <Text style={{ marginTop: 2, left: 11, fontSize: 12, color: '#595858'}}> ONBOARD </Text>
          <Text style={{ marginTop: 10, left: 10, fontSize: 18, color: '#bdbebf'}}> Bee Dekid </Text>
          <Text style={{ marginTop: 2, left: 11, fontSize: 12, color: '#595858' }}> ABSENT </Text>
        </View>
        <View style={{ height: 67, width: 100, alignItems: 'center' }}>
          <Text style={{ marginTop: 10, fontSize: 30 }}>6</Text>
          <Text style={{ marginTop: -5, fontSize: 12}}> Remaining </Text>
        </View>
        <View style={{ height: 67, width: 100, top: -67, left: 100, alignItems: 'center' }}>
          <Text style={{ marginTop: 10, fontSize: 30 }}>2</Text>
          <Text style={{ marginTop: -5, fontSize: 12}}> Onboard </Text>
        </View>
        <View style={{ height: 67, width: 100, top: -134, left: 200, alignItems: 'center' }}>
          <Text style={{ marginTop: 10, fontSize: 30 }}>1</Text>
          <Text style={{ marginTop: -5, fontSize: 12}}> Absent </Text>
        </View>
      </View>
    );
    {/* DRAWER VIEW */}
    return (
      <View>
        {/* LOGIN VIEW */}
        <Modal animationType="slide" visible={this.state.loginVisible} onRequestClose={() => this.setState({ loginVisible: true })}>
          <View style={{backgroundColor: '#f3f3f3', height: 800}} font-family='Segoe UI'>
            <Image 
              source={require('./login.jpg')} 
              style={{ width: 360, height: 450, left: 0, top: 60}}
            />
            <Button 
              onPress={this.handlePressLogin} 
              buttonStyle={{width: 301, marginBottom: 10, top: 0, left:13, backgroundColor: '#ebcc21'}} 
              color= '#1f1f1f' 
              title='LOGIN' 
              fontWeight='bold'
            />
            <FormInput 
              onChangeText={text => this.setState({ usernameInput: text })} 
              value={this.state.usernameInput} style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, top: -178, padding: 8}} 
              underlineColorAndroid='transparent'
            />
            <FormInput 
              onChangeText={text => this.setState({ passwordInput: text })} 
              value={this.state.passwordInput} 
              style={{backgroundColor: '#e2e2e2', width: 301, height: 35, left:13, top: -158, marginBottom: -100, padding: 8}} 
              underlineColorAndroid='transparent'
            />
            <View style={{height: 200, width: 195, top: -25}}>
              <Button 
                onPress={() => this.setState({registerVisible: true, loginVisible: false, registerAs: false})} 
                buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} 
                color= '#2f2f2f'
                title='Register as Driver'
              />
            </View>
            <View style={{height: 200, width: 195, top: -225, left: 160}}>
              <Button 
                onPress={() => this.setState({registerVisible: true, loginVisible: false, registerAs: true})} 
                buttonStyle={{width: 140, left:13, backgroundColor: '#ebcc21'}} 
                color= '#2f2f2f'
                title='Register as Guardian'
                />
            </View>
          </View>
        </Modal>
        {/* LOGIN VIEW */}

        {/* REGISTER VIEW */}
        <Modal animationType="fade" visible={this.state.registerVisible} onRequestClose={() => this.setState({ loginVisible: true, registerVisible: false})}>
          <View style={{backgroundColor: '#f3f3f3'}}>
            <View style={{backgroundColor: '#f3f3f3', height: 450, top: 0}}>
              <Image 
                source={require('./register.jpg')} 
                style={{ width: 360, height: 550, left: 0, top: 0}}
              />
              <FormInput 
                onChangeText={text => this.setState({ usernameInput: text })} 
                value={this.state.usernameInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, top: -315, padding: 8}} 
                underlineColorAndroid='transparent'
              />
              <FormInput 
                onChangeText={text => this.setState({ nameInput: text })} 
                value={this.state.nameInput} 
                style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, top: -295, padding: 8}} 
                underlineColorAndroid='transparent'
              />
              <FormInput 
                onChangeText={text => this.setState({ passwordInput: text })} 
                value={this.state.passwordInput} 
                style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, top: -276, padding: 8}} 
                underlineColorAndroid='transparent'
              />
              <FormInput 
                onChangeText={text => this.setState({ codeInput: text })} 
                value={this.state.codeInput} style={{backgroundColor: '#e2e2e2', width: 295, height: 35, left:16, top: -260, padding: 8}} 
                underlineColorAndroid='transparent'
              />     
              {
                this.state.registerAs &&
                  <Text style={{top: -260, left: 40, fontSize:10, color: '#4f4f4f' }}>*Optional</Text>     
              }
           </View>
            <View style={{backgroundColor: '#f3f3f3', height: 300, top: 10}}>
              <Button 
                onPress={() => this.setState({registerVisible: false, loginVisible: true})} 
                buttonStyle={{height: 35, width: 295, left:16, backgroundColor: '#ebcc21', top: 0}} 
                color= '#1f1f1f'
                title='SIGN UP' 
                fontWeight='bold'
              /> 
              <Text style={{bottom: -45, textAlign: 'center', fontSize:10, color: '#4f4f4f' }}>Driver's code should only be given to guardian under service.</Text>            
            </View>
          </View>
        </Modal>
        {/* REGISTER VIEW */}

        {/* DRIVER VIEW */}
        <Modal visible={this.state.driverVisible} onRequestClose={() => this.setState({ driverVisible: false})}>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
          >
            <View style={{backgroundColor: 'white', height: 800}} font-family='Segoe UI'>
              <Image 
                source={require('./header.jpg')} 
                style={{ width: 370, height: 800, left: 0, top: 0}}
              />
              <View style={{backgroundColor: 'white', width: 178, height: 60, top: -750, borderBottomWidth: 1.5, borderColor: this.state.mapDriverNotReadyVisible ? '#000000' : '#ebcc21'}}>
                <Button 
                  onPress={() => this.setState({ mapDriverNotReadyVisible: false, mapDriverReadyVisible: false})} 
                  buttonStyle={{top: 12, height: 60, width: 150, backgroundColor: 'transparent'}} 
                  color= {this.state.mapDriverNotReadyVisible ? '#000000' : '#ebcc21'}
                  fontSize = {15}
                  fontWeight = 'bold'
                  title='PROFILE'
                />
              </View>

              <View style={{backgroundColor: 'white', width: 182, height: 60, top: -810, left: 178, borderBottomWidth: 1.5, borderColor: this.state.mapDriverNotReadyVisible ? '#ebcc21' : '#000000'}}>
                <Button 
                  onPress={() => this.setState({ mapDriverNotReadyVisible: true})} 
                  buttonStyle={{top: 12, height: 60, width: 150, backgroundColor: 'transparent'}} 
                  color= {this.state.mapDriverNotReadyVisible ? '#ebcc21' : '#000000'}
                  fontSize = {15}
                  fontWeight = 'bold'
                  title='MAP'
                />
              </View>
                {
                  this.state.mapDriverNotReadyVisible && 
                  <View style={{width: 220, height: 10, top: -612, left: 70}}>
                    <Text style={{bottom: 10, color:'#1f1f1f'}}> Press the button when your shift starts </Text>
                    <Button
                      onPress={() => this.setState({ mapDriverReadyVisible: true, mapDriverNotReady: false})}
                      title='READY'
                      buttonStyle={{left: 18, backgroundColor: '#ebcc21', width: 150}}
                      color= 'black'
                      fontWeight='bold'
                    />
                  </View>
                }
                {
                  this.state.mapDriverReadyVisible &&
                  <View style={{backgroundColor: '#dcdcdc', height: 520, top: -810}}>
                    <View style={{height: 435, top: 0}}>
                    {/* MAP */}
                      <Image 
                        source={require('./map.jpg')} 
                        style={{ width: 370, left: 0, top: -30}}
                      />
                      <View style={{backgroundColor: '#ffffff', width: 270, height: 55, left: 47, top: -525, borderColor: '#d0d0d0', borderBottomWidth: 2}}>
                        <Text style={{ top: 4, fontSize: 25, textAlign: 'center', left:-5.5 }}> Morty Smith </Text>
                        <Text style={{ top: 3, fontSize: 13, textAlign: 'center', left:-5.5  }}> PREPARING 01:59 </Text>
                      </View>

                      <View style={{backgroundColor: 'transparent', width: 200, height: 55, left: 80, top: -220, alignItems: 'center'}}>
                        <Button 
                          onPress={() => this.setState({ profileDriverVisible: false})} 
                          buttonStyle={{height: 45, width: 150, backgroundColor: '#ebcc21'}} 
                          color= '#000000'
                          fontWeight= 'bold'
                          fontSize= {16}
                          title='ONBOARD'
                        />
                      </View>
                    {/* MAP */}
                    </View>

                    <View style={{backgroundColor: 'white', width: 178, height: 70, top: 2, borderBottomWidth: 15, borderBottomColor: 'white', borderTopWidth: 15, borderTopColor: 'white', borderRightWidth: .5, borderRightColor: '#bdbebf'}}>
                      <Text style={{ top: 2, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> 2 MINUTES </Text>
                      <Text style={{ top: 0, fontSize: 11, textAlign: 'center' }}> Estimated Time of Arrival </Text>
                    </View>

                    <View style={{backgroundColor: 'white', width: 187, height: 70, top: -68, left: 178, borderBottomWidth: 15, borderBottomColor: 'white', borderTopWidth: 15, borderTopColor: 'white', borderLeftWidth: .5, borderLeftColor: '#bdbebf'}}>
                      <Text style={{ top: 2, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> 3:05:12 </Text>
                      <Text style={{ top: 0, fontSize: 11, textAlign: 'center' }}> Countdown Before School Starts </Text>
                    </View>
                  </View>   
                }
              </View>
            </DrawerLayoutAndroid>
          </Modal>
          {/* DRIVER VIEW */}
        </View>
    );
  }
}
