import React, { useEffect, useState, useMemo } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const initStates = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: 'MM',
    cardYear: 'YY',
    cardCvv: '',
    isCardFlipped: false,
};

const image = require("../images/22.jpeg");
const chip = require('../images/chip.png');

//Generera flera bilder. Funkar ej. 
// const path = require("../images");
// const random = Math.floor(Math.random() * path.length);
// const image = require(${ path }"/"${ random }".jpeg");

const Card = ({ state }) => {

    const getCardType = () => {

        let number = state.cardNumber;

        if (number.match(RegExp("^4")) != null) return "visa";

        if (number.match(RegExp("^(34|37)")) != null) return "amex";

        if (number.match(RegExp("^5[1-5]")) != null) return "mastercard";

        if (number.match(RegExp("^6011")) != null) return "discover";

        if (number.match(RegExp('^9792')) != null) return 'troy'

        return "visa"; // default type
    };

    const Front = () => {
        return (
            <ImageBackground source={image} style={styles.card}>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Image source={chip} style={styles.chip} />
                        <FastImage
                            style={styles.cardType}
                            source={{
                                uri: `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <Text style={styles.number}>{state.cardNumber}</Text>
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.cardHolder}>Card Holder</Text>
                            <Text style={styles.cardHolder}>
                                {state.cardHolder.toUpperCase()}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.expires}>Expires</Text>
                            <Text style={styles.expires}>
                                {state.cardMonth}/
                                {state.cardYear == 'YY'
                                    ? state.cardYear
                                    : state.cardYear.substring(2, 4)}
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    const Back = () => {
        return (
            <ImageBackground source={image} style={styles.card}>
                <Text style={styles.stripe}></Text>
                <View style={styles.backInfo}>
                    <Text style={{ color: 'white' }}>CVV</Text>
                    <View style={styles.cvv}>
                        <Text>{state.cardCvv}</Text>
                    </View>
                    <FastImage
                        style={styles.cardType}
                        source={{
                            uri: `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </ImageBackground>
        );
    };

    return state.isCardFlipped ? <Back /> : <Front />;
};

const styles = StyleSheet.create({
    column: {
        flex: 1,
        justifyContent: 'space-around',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    card: {
        flex: 1,
        resizeMode: 'cover',
        borderWidth: 0,
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardHolder: {
        color: 'white',
    },
    expires: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    number: {
        color: 'white',
        fontSize: 25,
        letterSpacing: 3,
        paddingLeft: 20,
    },
    chip: {
        width: 50,
        height: 40,
        resizeMode: 'cover',
    },
    cardType: {
        width: 80,
        height: 60,
        resizeMode: 'cover',
    },
    stripe: {
        marginTop: 20,
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
    },
    backInfo: {
        marginBottom: 20,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        paddingRight: 20,
        paddingLeft: 20,
    },
    cvv: {
        marginTop: 5,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 40,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    },
});

export default Card;