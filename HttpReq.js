import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpReq extends Component {

    componentDidMount = () => {
            fetch('http://192.168.1.15/?cmd=info', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson
            })
        })
        .catch((error) => {
        });
    }
    render() {
        return (
           <View>
              <Text>
                 {this.state.data.body}
              </Text>
           </View>
        )
     }
}
export default HttpReq