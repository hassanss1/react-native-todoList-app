import React, { useState } from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import Images from '../../assets/icons/icons';
import { createBtnDefault } from '../../assets/buttons/buttons';

export default function Home() {
  // Set the tasks to be displayed
  const [tasks, setTasks] = useState<{ description: string; status?: false }[]>(
    [{ description: 'Primeira task' }, { description: 'Segunda task' }]
  );
  // Set the input field value
  const [taskData, setTaskData] = useState<
    {
      description: string;
      status?: false;
    }[]
  >([{ description: 'inicial', status: false }]);

  const handleTaskAdd = function () {
    console.log(taskData[0].description);
    setTasks(tasks ? tasks.concat(taskData) : taskData);
    setTaskData([{ description: '' }]);
  };
  const handleTaskDelete = function (item: any) {
    setTasks((prevState) =>
      prevState.filter(
        (element: any) => element.description !== item.description
      )
    );
  };
  const handleComplete = function (item: any) {
    console.log('You have clicked to complete this task');
  };
  // const countIncompleteTasks = function () {
  //   let counter = 0;
  //   for (let i = 0; i < tasks.length; i++) {
  //     if (tasks[i].status === false) counter++;
  //   }
  //   console.log(counter);
  //   return counter;
  // };

  return (
    <>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {/* header */}
          <Header />
          {/* form */}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Add a new task'
              placeholderTextColor='#808080'
              returnKeyType='send'
              keyboardType='default'
              value={taskData[0].description}
              onChangeText={(text) =>
                setTaskData([{ description: text, status: false }])
              }
            ></TextInput>
            <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
              <Image source={createBtnDefault} />
            </TouchableOpacity>
          </View>

          {/* filter */}
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.taskContainer}
              onPress={() =>
                console.log('You clicked to filter by incompleted tasks')
              }
            >
              <Text style={styles.incompletedTaskText}>Criadas</Text>
              <Text style={styles.taskNumber}>{'1'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.taskContainer}
              onPress={() =>
                console.log('You clicked to filter by completed tasks')
              }
            >
              <Text style={styles.completedTaskText}>Concluidas</Text>
              <Text style={styles.taskNumber}>{'1'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tasksContainer}>
            <FlatList
              style={styles.flatListStyle}
              data={tasks}
              keyExtractor={(item) => item.description}
              renderItem={({ item }) => (
                <Task
                  key={item.description}
                  definition={item.description}
                  status={item.status}
                  onRemove={() => handleTaskDelete(item)}
                  onComplete={() => handleComplete(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <>
                  <View style={styles.emptyMessageContainer}>
                    <Image source={Images.clipboard.inactive} />
                    <Text style={styles.emptyMessageHeader}>
                      Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.emptyMessageParagraph}>
                      Crie tarefas e organize seus itens a fazer
                    </Text>
                  </View>
                </>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
}
