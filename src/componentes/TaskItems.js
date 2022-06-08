import React from "react";
import {View,Text, Touchable, TouchableOpacity,} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import styles from '../styles/taskitems'

export const TaskItems = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.index}>{props.index}</Text>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete" style={styles.delete}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TaskItems