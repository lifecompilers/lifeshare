import React, { Fragment } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Button, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'

const IndexComponent = () => {
    return (
        <Fragment>
            <LinearGradient
                colors={['#0000FF', '#008080']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.actionButton}
                >
                    <Text h4>Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.actionButton}
                >
                    <Text h4>Send</Text>
                </TouchableOpacity>
            </LinearGradient>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionButton: {
        margin: 5,
        width: '70%',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});

export default IndexComponent;
