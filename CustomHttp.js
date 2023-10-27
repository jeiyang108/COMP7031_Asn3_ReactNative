import React, { Component } from 'react'
import { View, Text } from 'react-native'

// Demonstrates connecting to a website, downloading the default page,
// and displaying the downloaded page in a text view
// as well as printing it out on the console log.
class CustomHttp extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://github.com', {
            method: 'GET'
        })
        .then((response) => response.text()) // Use response.text() to get the response as text
        .then((responseText) => {
            console.log("--- Custom HTTP ---\n" + responseText);
            this.setState({
                data: responseText
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }
    render() {
        return (
            <View>
                <Text>
                    {this.state.data}
                </Text>
            </View>
        )
    }
}
export default CustomHttp