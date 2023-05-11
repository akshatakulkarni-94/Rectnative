import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardView = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 8,
    marginBottom: 8,
    marginRight:10,
    marginLeft:10,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

export default CardView;
