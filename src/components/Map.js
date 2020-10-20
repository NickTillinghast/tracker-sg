import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';


const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 39.923221 + i * 0.001,
                longitude: -105.074926 + 1 * 0.001
            })
        } else {
            points.push({
                latitude: 39.923221 - i * 0.002,
                longitude: -105.074926 + 1 * 0.001
            })
        }
    }

    return (
        <MapView
            initialRegion={{
                latitude: 39.923221,
                longitude: -105.074926,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            style={styles.map}
        >
            <Polyline coordinates={points} />

        </MapView>
    )

}
const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;