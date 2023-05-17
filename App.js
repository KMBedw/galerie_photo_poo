import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import ImagePickerButton from './components/ImagePickerButton';
import DisplayImage from './components/DisplayImage';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionne ton image</Text>
      <DisplayImage imageUri={image} />
      <ImagePickerButton onImagePicked={setImage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfd6cd',
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
});