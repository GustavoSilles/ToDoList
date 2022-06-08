
import React, { useState } from "react";
import { Keyboard, ScrollView, View, Text } from "react-native";
import TaskInputField from './src/componentes/TaskInputField';
import TaskItems from "./src/componentes/TaskItems";
import styles from "./src/styles/app"

export default function App(){
  const [tasks, setTasks] = useState([])

  const handleAddTask = (task) => {
    if (task) {
      setTasks([...tasks, task])
      Keyboard.dismiss()
    }
  }
  const handleDeleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex))
  }
  return (
    <View style={styles.container}>

      <ScrollView>

        {tasks.map((task, index) => {
          return (
            <View>
              <TaskItems key={index} index={index + 1} task={task}
                deleteTask={() => handleDeleteTask(index)}
              />
            </View>
          )
        })}
      </ScrollView>
      <TaskInputField addTask={handleAddTask} />

    </View>
  )
}
