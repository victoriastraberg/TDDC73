import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import ProjectDetails from './projectDetails';
import { gql, useQuery } from '@apollo/client';
import { Picker } from '@react-native-picker/picker';
//import { isWrappingType } from 'graphql';


const REPO_QUERY = gql`
  query MyQuery($Search: String!) {
    search(query: $Search, type: REPOSITORY, first: 10) {
        nodes {
        ... on Repository {
          description
          stargazerCount
          name 
          forkCount   
          refs(first:0, refPrefix: "refs/heads/"){
              totalCount
          }
          licenseInfo{
              key
          }
          defaultBranchRef{
              target{
                  ...on Commit{
                      history{
                          totalCount
                      }
                  }
              }
          }
        }
      }
    }
  }
`;

function tryFetchQuery(searchLang) {
    const { loading, error, data } = useQuery(REPO_QUERY, {
        variables:
            searchLang === 'any'
                ? { Search: 'stars:>1000' }
                : { Search: 'stars:>1000 language:' + searchLang },
    });

    if (loading) return 'loading';
    if (error) {
        console.log(`Error! ${error.message}`);
        return 'error';
    }

    const repositories = data.search.nodes;

    return repositories;
}


export default function Home({ navigation }) {

    const [search, setSearch] = useState('any');
    const repositories = tryFetchQuery(search);
    const Separator = () => (<View style={styles.separator} />)

    if (repositories == 'error') {
        return (
            <View style={styles.homebody}>
                <Text> ERROR!</Text>
            </View>
        )
    }
    else if (repositories == 'loading') {
        return (
            <View style={styles.homebody}>
                <ActivityIndicator size="large" />
                <Text> LOADING...</Text>
            </View>)
    }
    else {
        return (
            <View style={styles.homebody}>
                <View style={styles.upperBox}>
                    <Text style={styles.rubrikText}>Trending Repositories</Text>
                </View>
                <FlatList
                    data={repositories}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ProjectDetails', item)}>
                            <View style={styles.objectbox}>
                                <View style={styles.titleBox}>
                                    <Text style={styles.titleFont}>{item.name}</Text>
                                </View>
                                <View style={styles.descriptionBox}>
                                    <Text style={styles.descriptFont}>{item.description}</Text>
                                </View>
                                <View style={styles.bottomBox}>
                                    <View style={styles.miniBox}>
                                        <Text style={{ color: 'black' }}>Stars: <Text>{item.stargazerCount}</Text></Text>
                                    </View>
                                    <View style={styles.miniBoxFork}>
                                        <Text style={{ color: 'white' }}>Fork: <Text>{item.forkCount}</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.languageBox}>
                    <Picker
                        selectedValue={search}
                        onValueChange={(itemValue, itemIndex) => setSearch(itemValue)}>
                        <Picker.Item label="Pick A Language" value="any" />
                        <Picker.Item label="C" value="c" />
                        <Picker.Item label="C#" value="c#" />
                        <Picker.Item label="C++" value="c++" />
                        <Picker.Item label="JavaScript" value="javascript" />
                        <Picker.Item label="React" value="React" />
                        <Picker.Item label="React Native" value="react native" />
                        <Picker.Item label="Python" value="python" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="HTML" value="html" />
                        <Picker.Item label="PHP" value="php" />
                        <Picker.Item label="CSS" value="css" />
                        <Picker.Item label="Ruby" value="ruby" />
                    </Picker>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homebody: {
        backgroundColor: "#303030",
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    objectbox: {
        width: 350,
        backgroundColor: '#424242',
        margin: 5
    },
    titleBox: {
        height: 50,
        padding: 10,
        width: '100%',
    },
    descriptionBox: {
        paddingLeft: 10,
        minHeight: 80,
        width: '100%',
    },
    bottomBox: {
        height: 30,
        width: '100%',
        flexDirection: "row-reverse"
    },
    miniBox: {
        height: 20,
        width: 100,
        marginRight: 10,
        borderWidth: 1,
        backgroundColor: '#FAF695',
    },
    miniBoxFork: {
        marginRight: 10
    },
    pickerBox: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        width: 165
    },
    upperBox: {
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    titleFont: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    descriptFont: {
        fontSize: 15,
        color: "#FFFFFF",
        marginTop: 15
    },
    languageBox: {
        alignSelf: "stretch",
        backgroundColor: "#8496A2"
    },
    rubrikText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    separator: {
        marginHorizontal: 1
    },
});


