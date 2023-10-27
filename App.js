import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import CustomText from './CustomText';
import CustomHttp from './CustomHttp';
import SyncStorageExample from './SyncStorageExample';
export default class App extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         photoList: [require('./assets/i1.jpeg'), require('./assets/i2.jpeg'), 
            require('./assets/i3.jpeg'), require('./assets/i4.jpeg')],
         headingText: 'Press Left or Right button to Scroll Images',
         currentIndex: 0
      }
   }
   onPressLeft = () => {
      console.log('Shift image to the Left')
      if (this.state.currentIndex === 0) {
         this.setState({ currentIndex: this.state.photoList.length - 1 });
      } else {
         this.setState({ currentIndex: --this.state.currentIndex });
      }
   }
   onPressRight = () => {
      console.log('Shift image to the Right')
      if (this.state.currentIndex === this.state.photoList.length - 1) {
         this.setState({ currentIndex: 0 });
      } else {
         this.setState({ currentIndex: ++this.state.currentIndex });
      }
   }
   render() {
      return (
         <View style={styles.outerContainer}>
            <View style={styles.header}>
               <Text style={styles.text}>COMP7031 React Native App - Jei Yang</Text>
            </View>
         
            <View style={styles.innerContainer}>
               <CustomText myState = {this.state.headingText}/>
               <Image source={this.state.photoList[this.state.currentIndex]} style={styles.image} />
               <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={this.onPressLeft} key="Left" style={styles.button} color=""><Text>Left</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.onPressRight} key="Right" style={styles.button} color=""><Text>Right</Text></TouchableOpacity>
               </View>
            </View>
            
            <SyncStorageExample />
            <CustomHttp />
         </View>
      );
   }
}

const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;

const styles = StyleSheet.create({

   outerContainer: {
      flex: 1,
   },
   header: {
      marginTop: 50,
      padding: 10,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      size: 15,
   },
   innerContainer: {
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      backgroundColor: '#fff',
   },
   buttonsContainer: {
     flexDirection: 'row',
     height: 40,
     width: '100%',
     paddingHorizontal: '4%'
   },
   image: {
     width: imageWidth,
     height: imageHeight,
     marginTop: imageHeight * 0.5,
     marginBottom: 10,
   },
   button: {
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 4,
      backgroundColor: 'powderblue',
      alignSelf: 'flex-start',
      marginHorizontal: '2%',
      minWidth: '42%',
      textAlign: 'center',
      alignItems: 'center',
   },
   text: {
     height: 20,
     color: 'white'
   },
 });
 
 