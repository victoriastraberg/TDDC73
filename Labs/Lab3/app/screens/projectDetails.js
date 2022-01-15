import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

export default function ProjectDetails({ navigation }) {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.detailsbody}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={styles.projectName}>{navigation.getParam('name')}</Text>
                    <Text style={styles.descrip}>{navigation.getParam('description')}</Text>
                </View>

                <Text style={styles.typeofInfo}>License: <Text style={styles.theInfo}>{navigation.getParam('licenseInfo').key}</Text></Text>
                <Text style={styles.typeofInfo}>Commits: <Text style={styles.theInfo}>{navigation.getParam('defaultBranchRef').target.history.totalCount}</Text></Text>
                <Text style={styles.typeofInfo}>Branches: <Text style={styles.theInfo}>{navigation.getParam('refs').totalCount}</Text></Text>
                <View style={styles.buttonBox}>
                    <Button color="#414141" title='Go Back' onPress={() => navigation.goBack()} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailsbody: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBox: {
        width: 100,
        height: 60,
        margin: 30
    },
    projectName: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
    },
    descrip: {
        fontSize: 25,
        textAlign: 'center',
    },
    typeofInfo: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10
    },
    theInfo: {
        fontSize: 15,
        textAlign: 'center',
    }
});
