import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function DisplayImage({ imageUri }) {
  if (!imageUri) {
    return null;
  }

  return (
    <Image source={{ uri: imageUri }} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
