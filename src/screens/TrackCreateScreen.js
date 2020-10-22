import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    // console.log("outside", state.recording);
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording)
        // console.log("inside", state.recording);
    })

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Text h2>Create a Track</Text>
            <Map />

            {/* <NavigationEvents onWillBlur={() => console.log("Leaving")} /> */}
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);