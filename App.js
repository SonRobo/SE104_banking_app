import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const PlaceholderImage = require('./assets/back.png');

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic 
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <StatusBar style="auto" />
      </View>

      {/* Username input */}
      <View style={styles.userProfileContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <FontAwesomeIcon icon="fa-solid fa-user" />
      </View>

      {/* Password input */}
      <View style={styles.userProfileContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      {/* Login button */}
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#229397',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 230,
    height: 263,
    borderRadius: 18,
  },
  roundedContainer: {
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginTop: 120,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    height: 200,
  },
  userProfileContainer: {
    borderRadius: 10,
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1,
    backgroundColor: "#FFF",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 18,
    paddingHorizontal: 20,
    width: 360,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    width: '80%',
  },
  loginContainer: {
    borderRadius: 20,
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1,
    backgroundColor: "#DFF5FF",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 54,
    width: 360,
  },
  loginText: {
    fontSize: 24,
    color: '#000'
  },
});
