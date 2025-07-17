import React from 'react';
import {
  View,
  Modal,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Colors from '../assets/styles/Colors';

interface LoaderProps {
  loaderText?: string;
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loaderText = 'Loading...', isLoading }) => {
  return (
    <Modal animationType="fade" transparent visible={isLoading}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <ActivityIndicator size="small" color={Colors.primaryBlack} />
          <Text style={styles.text}>{loaderText}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040', // semi-transparent
  },
  box: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: 120,
  },
  text: {
    color: Colors.primaryBlack,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
});
