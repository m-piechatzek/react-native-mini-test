/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  AlertIOS
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'pink',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 65,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    flex: 1
  },
  description: {
     marginBottom: 20,
     fontSize: 18,
     textAlign: 'center',
     color: 'pink'
   },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }

});

//Components
class HelloWorld extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>Hello World!</Text>


          <Text style={styles.description}>From my computer: </Text>
          <Image
            style={styles.image}
            source={require('./pine.jpg')}/>

          <Text style={styles.description}>From Imgur: </Text>
          <Image
            style={styles.image}
            source={{uri: 'http://i.imgur.com/l6I06J6.jpg?1'}}/>


            <TouchableHighlight
              style={styles.button}
              underlayColor='#FADCF6'
              onPress={() => AlertIOS.alert(
                'ALERTTTTTTTT',
                'hihiihih',
                [
                  {text: 'I\'ve had Enough', type: 'default'}
                ]
              )}>
                <Text style={styles.buttonText}>
                  Alert Message!
                </Text>
              </TouchableHighlight>
    </View>);
}
}

class BernieTestApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Bernie Test',
          component: HelloWorld,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('BernieTest', function()
 { return BernieTestApp });
