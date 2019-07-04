import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class SecondScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'Second Screen',
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[0, 1]}
        />
    ),
  };

  moveToHome = () => {
    this.props.navigation.navigate('Home');
  }
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Second Screen </Text>
        <Button
          title='Go to Home Screen'
          onPress={this.moveToHome}
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
