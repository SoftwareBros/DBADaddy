import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { SafeAreaView } from 'react-navigation';

type Props = {navigation: {navigate: Function}};
type State = {};
export default class ExchangeHub extends Component<Props, State> {
  static navigationOptions = {
    title: 'Exchange Hub',
    headerBackground: (
        <LinearGradient
            colors={['#58AADA', '#FF9C33']}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[0, 1]}
        />
    ),
  };

  moveToFoco = () => {
    this.props.navigation.navigate('Exchange', {venue: "Foco"});
  }
  moveToCollis = () => {
    this.props.navigation.navigate('Exchange', {venue: "Collis"});
  }
  moveToKAF = () => {
    this.props.navigation.navigate('Exchange', {venue: "KAF"});
  }
  moveToHop = () => {
    this.props.navigation.navigate('Exchange', {venue: "Hop"});
  }
  
  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> ExchangeHub </Text>
        <Button
          title='Go to Foco'
          onPress={this.moveToFoco}
        />
        <Button
          title='Go to Collis'
          onPress={this.moveToCollis}
        />
        <Button
          title='Go to KAF'
          onPress={this.moveToKAF}
        />
        <Button
          title='Go to the Hop'
          onPress={this.moveToHop}
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
