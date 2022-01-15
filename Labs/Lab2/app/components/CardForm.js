import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CardForm = ({ state, onUpdateState }) => {
    const [cardNumber, setCardNumber] = useState('');

    const onCardNumberChange = (text, name) => {
        let cardNumber = text;
        //Replace everything except numbers
        text = text.replace(/[^0-9.]/g, '');
        //Space between every forth number
        cardNumber = text.replace(/(.{4})/g, '$1 ');
        setCardNumber(text);
        onUpdateState(name, cardNumber);
    };

    return (
        <View style={styles.container}>
            <Text>Card Number</Text>
            <TextInput style={styles.textInput}
                onChangeText={(text) => onCardNumberChange(text, 'cardNumber')}
                value={cardNumber}
                maxLength={16}
                keyboardType="numeric"
            />
            <Text>Card Holder</Text>
            <TextInput style={styles.textInput}
                onChangeText={(text) => onUpdateState('cardHolder', text)}
                Value={state.cardName}
                maxLength={25}
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.textExp}>Expiration Date</Text>
                    <View style={styles.row}>
                        <Picker style={styles.picker}
                            selectedValue={state.cardMonth}
                            onValueChange={(itemValue) => onUpdateState('cardMonth', itemValue)}
                        >
                            <Picker.Item label="Month" value="0" />
                            <Picker.Item label="01" value="01" />
                            <Picker.Item label="02" value="02" />
                            <Picker.Item label="03" value="03" />
                            <Picker.Item label="04" value="04" />
                            <Picker.Item label="05" value="05" />
                            <Picker.Item label="06" value="06" />
                            <Picker.Item label="07" value="07" />
                            <Picker.Item label="08" value="08" />
                            <Picker.Item label="09" value="09" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                        </Picker>
                        <Picker style={styles.picker}
                            selectedValue={state.cardYear}
                            onValueChange={(itemValue) => onUpdateState('cardYear', itemValue)
                            }>
                            <Picker.Item label="Year" value="0" />
                            <Picker.Item label="2021" value="2021" />
                            <Picker.Item label="2022" value="2022" />
                            <Picker.Item label="2023" value="2023" />
                            <Picker.Item label="2024" value="2024" />
                            <Picker.Item label="2025" value="2025" />
                            <Picker.Item label="2026" value="2026" />
                            <Picker.Item label="2027" value="2027" />
                            <Picker.Item label="2028" value="2028" />
                        </Picker>
                    </View>
                </View>
                <View>
                    <Text>CVV</Text>
                    <TextInput style={styles.textCVV}
                        onChangeText={(text) => onUpdateState('cardCvv', text)}
                        onFocus={() => onUpdateState('isCardFlipped', true)}
                        onBlur={() => onUpdateState('isCardFlipped', false)}
                        maxLength={4}
                        textContentType="creditCardNumber"
                        value={state.cvv}
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={{ paddingTop: 30 }}>
                <Button title="Submit" onPress={() => Alert.alert('Card submitted')} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    textInput: {
        marginTop: 5,
        marginBottom: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
    },
    textExp: {
        marginLeft: 5
    },
    picker: {
        height: 50,
        width: 120
    },
    textCVV: {
        height: 40,
        width: 130,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CardForm;