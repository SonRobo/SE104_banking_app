import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const PlaceholderImage = require('./assets/back.png');

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Navigate to HomeScreen on successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
      </View>

      <View style={styles.userProfileContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.userProfileContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
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
      flexDirection: 'row',
      borderRadius: 10,
      borderColor: "rgba(212, 212, 212, 1)",
      borderWidth: 1,
      backgroundColor: "#FFF",
      marginTop: 20,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingVertical: 18,
      paddingHorizontal: 20,
      width: 360,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 10,
      fontSize: 20,
      color: '#000',
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
  