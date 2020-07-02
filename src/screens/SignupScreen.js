import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
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