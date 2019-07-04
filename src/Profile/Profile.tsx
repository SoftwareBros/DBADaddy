import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class Profile extends Component<Props, State> {
  static navigationOptions = {
    title: 'Profile',
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, .5]}
            end={[0, 1]}
        />
    ),
  };

  moveToExchangeHub = () => {
    this.props.navigation.navigate('ExchangeHub');
  }
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Profile </Text>
        <Button
          title='Go to Home Screen'
          onPress={this.moveToExchangeHub}
        />
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
