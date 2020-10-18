import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, Button, View } from 'react-native';

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => {
                submitHandler(text);
                setText('');
            }
            }
                title='add todo' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});


export default AddTodo;
