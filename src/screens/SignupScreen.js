import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Email"
            value={email}
            onChangeText={setEmail} />
        <Spacer />
        <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            label="Password"
            value={password}
            onChangeText={setPassword}
        />
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </View>
}
const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})
// remove header
SignupScreen.navigationOptions = () => {
    return {
        // changed from header: null
        header: () => false,
    };
};
export default SignupScreen;