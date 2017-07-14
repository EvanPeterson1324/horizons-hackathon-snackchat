import React from 'react';
import styles from '../styling/styles';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  StyleSheet,
  Image
} from 'react-native';

//Screens
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password',
    }
  };

  login() {
  }
  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <View>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          {/* <Text style={styles.textBig}>SnackChat!</Text> */}
        </View>
        <View style={styles.loginContainer}>
          {/*LOGIN*/}
          <TextInput style={styles.inputField}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
          />
          {/*PASSWORD*/}
          <TextInput style={styles.inputField}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <TouchableOpacity onPress={ () => {this.login()} } style={styles.loginContainer}>
            <View>
              <Text>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ () => {this.register()} }>
            <View style={styles.secondaryButton}>
              <Text>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen
