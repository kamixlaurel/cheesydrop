import React from 'react';
import { FlatList, DrawerLayoutAndroid, Image, Modal, StyleSheet, Switch, ToastAndroid, View, TextInput, Dimensions, ScrollView } from 'react-native';
import { Button, FormLabel, Header, Icon, List, ListItem, Text, ButtonGroup } from 'react-native-elements';
import { MapView, Permissions, Location } from 'expo';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      modalVisible: true,
      modalState: 'login',
      // Form Input States
      name: '',
      username: '',
      password: '',
      location: '',
      code: '',
      selectedIndex: 0,
      markerCoord: {
        latitude: 0,
        longitude: 0
      },
      region: {
        latitude: 14.5995,
        longitude: 120.9842,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  render() {
    const imageWidth = Dimensions.get('window').width;
    const imageHeight = imageWidth / 2;
    const containerHeight = Dimensions.get('window').height - (imageHeight - 20);
    const buttons = ['Driver', 'Guardian'];
    const { selectedIndex } = this.state;
    
    switch(this.state.modalState){
      case 'login':
        modalContent = 
          <View style={styles.view}>
            <Image 
              source={require('./img/logo.png')} 
              style={{ width: 160, height: 160, marginTop: 20 }}
            />
            <Text style={{fontSize: 32, marginVertical: 10}}>CHEESY<Text style={{fontWeight: 'bold'}}>DROP</Text></Text>
            <Text>Your child is safe with us</Text>
            <FormLabel style={styles.formLabel}>Username</FormLabel>
            <TextInput 
              style={styles.formInput} 
              underlineColorAndroid='transparent' 
              onChangeText={(username)=>{this.setState({username})}}
              value={this.state.username}/>
            <FormLabel style={styles.formLabel}>Password</FormLabel>
            <TextInput
              style={styles.formInput}
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(password)=>{this.setState({password})}}
              value={this.state.password}/>
            <Button 
              buttonStyle={styles.button} 
              color= '#1f1f1f' 
              title='LOGIN' 
              fontWeight='bold'
            />
            <Button 
              onPress={()=>{this.setState({modalState: 'register', username: '', password: ''})}}
              buttonStyle={styles.button} 
              color= '#1f1f1f' 
              title='CREATE AN ACCOUNT' 
              fontWeight='bold'
            />
          </View>
        break;
      case 'register':
        modalContent =
        <View style={{backgroundColor: '#f3f3f3'}}>
          <Image 
            source={require('./img/header.png')}
            style={{ width: imageWidth, height: imageHeight }}
          />
          <View style={{height: containerHeight, backgroundColor: '#f3f3f3', alignItems: 'center', padding:20}}>
            <FormLabel style={styles.formLabel}>Name</FormLabel>
            <TextInput style={styles.formInput} underlineColorAndroid='transparent' onChangeText={(name)=>{this.setState({name})}} value={this.state.name}/>
            <FormLabel style={styles.formLabel}>Username</FormLabel>
            <TextInput style={styles.formInput} underlineColorAndroid='transparent' onChangeText={(username)=>{this.setState({username})}} value={this.state.username}/>
            <FormLabel style={styles.formLabel}>Password</FormLabel>
            <TextInput style={styles.formInput} underlineColorAndroid='transparent' onChangeText={(password)=>{this.setState({password})}} secureTextEntry={true} value={this.state.password}/>
            <FormLabel style={styles.formLabel}>I am a</FormLabel>
            <ButtonGroup
              onPress={this.updateIndex.bind(this)}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 35}}
              selectedBackgroundColor={'#ebcc21'}
              />
            <Button 
              onPress={this.checkInput}
              buttonStyle={styles.button} 
              color= '#1f1f1f' 
              title='NEXT >' 
              fontWeight='bold'
            />
          </View>
          </View>
        break;
        case 'guardian':
          modalContent = 
            <View style={{backgroundColor: '#f3f3f3'}}>
            <Image 
              source={require('./img/header.png')}
              style={{ width: imageWidth, height: imageHeight }}
            />
            <View style={{height: containerHeight, backgroundColor: '#f3f3f3', alignItems: 'center', paddingBottom:20, paddingLeft: 20, paddingRight:20}}>
              <FormLabel style={styles.formLabel}>Pick-up Location</FormLabel>
              <View style={{flexDirection: 'row', width: 310, height: 35, justifyContent: 'center', paddingLeft:3}}>
              <TextInput
                style={{backgroundColor: '#e2e2e2', padding: 8, flex:1}}
                underlineColorAndroid='transparent'
                returnKeyType='search'
                onChangeText={(location)=>{this.setState({location})}} 
                onSubmitEditing={this._requestLocation}
                value={this.state.location}/>
              <Button 
                onPress={this._getLocationAsync}
                buttonStyle={{backgroundColor: '#ebcc21', flex:1, marginLeft:3}} 
                color= '#1f1f1f' 
                title='CURRENT LOCATION' 
                fontWeight='bold'
              />
              </View>
              <MapView 
                style={{width: 301, height: 140}} 
                initialRegion={this.state.region}
                region={this.state.region} 
                onPress={e => this.setState({ markerCoord: e.nativeEvent.coordinate })}
              >
                <MapView.Marker draggable coordinate={this.state.markerCoord} />
              </MapView>
              <FormLabel style={styles.formLabel}>Code (Provided by driver)</FormLabel>
              <TextInput style={styles.formInput} underlineColorAndroid='transparent' onChangeText={(code)=>{this.setState({code})}} value={this.state.code}/>
              <Button 
                onPress={()=>{ this.setState({modalState: 'register'})}}
                buttonStyle={styles.button} 
                color= '#1f1f1f' 
                title='< BACK' 
                fontWeight='bold'
              />
              <Button
                buttonStyle={styles.button} 
                color= '#1f1f1f' 
                title='REGISTER' 
                fontWeight='bold'
                onPress={this.registerPress}
              />
            </View>
            </View>
            break;
        case 'driver': 
          modalContent = 
            <View style={{backgroundColor: '#f3f3f3'}}>
            <Image 
              source={require('./img/header.png')}
              style={{ width: imageWidth, height: imageHeight }}
            />
            <View style={{height: containerHeight, backgroundColor: '#f3f3f3', alignItems: 'center', paddingBottom:20, paddingLeft: 20, paddingRight:20}}>
              <FormLabel style={styles.formLabel}>School</FormLabel>
              <TextInput
                style={styles.formInput}
                underlineColorAndroid='transparent'
                returnKeyType='search'
                onChangeText={(location)=>{this.setState({location})}} 
                onSubmitEditing={this._requestLocation}
                value={this.state.location}/>
              <MapView 
                style={{width: 301, height: 200}} 
                initialRegion={this.state.region}
                region={this.state.region} 
                onPress={e => this.setState({ markerCoord: e.nativeEvent.coordinate })}
              >
                <MapView.Marker draggable coordinate={this.state.markerCoord} />
              </MapView>
              <Button 
                onPress={()=>{ this.setState({modalState: 'register'})}}
                buttonStyle={styles.button} 
                color= '#1f1f1f' 
                title='< BACK' 
                fontWeight='bold'
              />
              <Button
                buttonStyle={styles.button} 
                color= '#1f1f1f' 
                title='REGISTER' 
                fontWeight='bold'
                onPress={this.registerPress}
              />
            </View>
            </View>
    }
    return (
       <View style={styles.view} >
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: true, modalState: 'login' })}
        >
          {modalContent}
        </Modal>
      </View>
    );
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _requestLocation = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key=AIzaSyD0I1a_VvnFT6wAHogd6YBBmWP5saGydrY')
      .then(response => {
        const location = response.data.results[0].geometry.location
        const coords = {latitude: location.lat, longitude: location.lng}
        this.setState({ 
          markerCoord: coords,
          region: Object.assign(coords, {latitudeDelta: 0.005, longitudeDelta: 0.005}) });        
        }
        )        
      .catch(response => {console.log(response);})
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    try{
    if (status !== 'granted') {
      ToastAndroid.show('Permission to access location was denied',ToastAndroid.SHORT)
    }
    }catch(e){
      ToastAndroid.show('Permission to access location was denied',ToastAndroid.SHORT)
    }
    
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ markerCoord: location.coords, region: Object.assign(location.coords, {latitudeDelta: 0.005, longitudeDelta: 0.005}) });

  };

  registerPress = () => {
    try {
      //checkvalues
      registerInfo = {
        //table cols = statename
      }
      //axios post register
      //axios get login
    } catch (e) {
      
    }
  }
  
  checkInput = () => {
    this.setState({modalState: this.state.selectedIndex ? 'guardian' : 'driver'})
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f3f3f3', 
    height: 800,
    alignItems: 'center',
    padding: 20
  },
  button: {
    width: 301,
    marginTop: 10,
    backgroundColor: '#ebcc21'
  },
  formLabel: {
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  formInput:{
    backgroundColor: '#e2e2e2', 
    width: 301, 
    height: 35,
    padding: 8
  }
})