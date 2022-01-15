import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/Card';
import CardForm from './components/CardForm';

const initStates = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: 'MM',
  cardYear: 'YY',
  cardCvv: '',
  isCardFlipped: false,
};

const App = () => {
  const [state, setState] = useState(initStates);

  //Handle input change 
  const handleInputChange = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card state={state} />
      </View>
      <View style={styles.formContainer}>
        <CardForm state={state} onUpdateState={handleInputChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    flex: 4,
    padding: 10,
  },
  formContainer: {
    flex: 8,
  },
});

export default App;