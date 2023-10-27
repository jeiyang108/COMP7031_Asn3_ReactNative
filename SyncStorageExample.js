import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SyncStorageExample = () => {
  const [storedValue, setStoredValue] = useState(''); // Initialize with an empty string

  useEffect(() => {
    const exampleStore = async () => {
      try {
        // Set the "foo" key to the initial value "bar".
        await AsyncStorage.setItem('foo', 'bar');
        const value = await AsyncStorage.getItem('foo');

        if (value !== null && value !== '') {
          console.log('--- Sync Storage ---\n' + value);
          setStoredValue(value); // Update the state with the retrieved value
        } else {
          console.log('No data found');
        }
      } catch (error) {
        console.log('Error: ' + error.message);
      }
    };

    // Call the async function.
    exampleStore();
  }, []);

  return (
    <View>
      <Text>{storedValue}</Text>
    </View>
  );
};

export default SyncStorageExample;
