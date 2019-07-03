import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class BecomeSeller extends Component<Props, State> {
  static navigationOptions = {
    title: 'Become a Seller',
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[0, 1]}
        />
    ),
  };

  moveToExchange = () => {
    this.props.navigation.navigate('Exchange');
  }
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Become a Seller! </Text>
        <Button
          title='Go back to exchange'
          onPress={this.moveToExchange}
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
