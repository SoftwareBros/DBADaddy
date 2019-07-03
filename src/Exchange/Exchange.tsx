import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class Exchange extends Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
      venue: this.props.navigation.state.params.venue,
      modalVisible: false
    }
  }
  static navigationOptions = {
    title: `Exchange`,
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[0, 1]}
        />
    ),
  };

  moveToBecomeSeller = () => {
    this.props.navigation.navigate('BecomeSeller');
  }
  triggerModal = () => {
    console.log("triggered modal");
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> {this.state.venue} </Text>
        <Button
          title='Sample Seller'
          onPress={this.triggerModal}
        />

        <Button
          title='Become a Seller'
          onPress={this.moveToBecomeSeller}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={this.triggerModal}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
