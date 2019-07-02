import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {navigation: {navigate: Function } };
type State = {};
export default class HomeScreen extends Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
      status: "Unsent"
    }
  }
  moveToSecond = () => {
    this.props.navigation.navigate('Second');
  }
  pingServer = () => {
    const that = this;
    return fetch("http://10.0.2.2:3000").then(function(response: any){
      return response.json();
    })
    .then(function(res: any){
      console.log(res);
      that.setState({status: res.status}) ;
    }).catch((e)=>{
      console.log(e);
    });
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}> {`Status: ${this.state.status}`} </Text>
        <Button
          title='Send request'
          onPress={this.pingServer}
        />
        <Button
          title='Go to Second Screen'
          onPress={this.moveToSecond}
        />
      </View>
    );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
