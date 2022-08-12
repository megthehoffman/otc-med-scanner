
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Button, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';

import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

import Colors from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function MedScannerScreen({ path }: { path: string }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const askPermissions = () => {
    (async () => {
      console.log("Asking for permissions");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");

      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    })();
  };

  // @ts-ignore
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setHasPermission(false); // permissions don't actually work but this does shut the camera off?
    // get info and log here
  };

  console.log(scanned);

  if (hasPermission && hasPermission) {
    console.log("Camera opened, permission true");
    return (
      <View>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Button title="Scan a medication" onPress={askPermissions} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
