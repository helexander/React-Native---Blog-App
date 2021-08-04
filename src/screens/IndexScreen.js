import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return <View>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Feather style={styles.iconStyle} name="trash" />
                </View>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24,
    }
});

export default IndexScreen;