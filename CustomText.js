import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
const CustomText = (props) => {
    return (
        <View>
            <Text style = {styles.myState}>
                {props.myState}
            </Text>
        </View>
    )
}

export default CustomText
const styles = StyleSheet.create ({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})