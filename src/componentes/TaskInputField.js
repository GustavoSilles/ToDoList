import React, { useState } from "react";
import {View,TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import styles from '../styles/taskinputfield'

export const TaskInputField = (props) => {
    const[task,setTask] = useState('')
    const handleAddTask = (value) => {
        props.addTask(value)
        setTask('')
    }
    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput style={styles.inputField}
            placeholderTextColor='#fff'
            value={task}
            placeholder='Escreva uma tarefa'
            onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={()=> handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="add" size={20} color="black"/>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )

}

export default TaskInputField