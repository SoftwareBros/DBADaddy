import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class Login extends Component<Props, State> {
  static navigationOptions = {
    title: 'Login',
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[0, 1]}
        />
    ),
  };

  moveToProfile = () => {
    this.props.navigation.navigate('Profile');
  }
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Login </Text>
        <Button
          title='JOIN'
          onPress={this.moveToProfile}
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
