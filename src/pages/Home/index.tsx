import React, { useState } from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import Images from '../../assets/icons/icons';
import { createBtnDefault } from '../../assets/buttons/buttons';

export default function Home() {
  // Set the tasks to be displayed
  const [tasks, setTasks] = useState<
    { description: string; status?: boolean }[]
  >([
    { description: 'Primeira task', status: false },
    { description: 'Segunda task', status: false },
  ]);
  const [showTasks, setShowTasks] = useState<
    { description: string; status?: boolean }[]
  >([]);
  // Set the input field value to be used in the form
  const [taskData, setTaskData] = useState<
    {
      description: string;
      status?: false;
    }[]
  >([{ description: '', status: true }]);

  const handleTaskAdd = function () {
    if (taskData) {
      setTasks((prevState) =>
        prevState ? prevState.concat(taskData) : taskData
      );
      setShowTasks((prevState) =>
        prevState ? prevState.concat(taskData) : tasks
      );
      setTaskData([{ description: '' }]);
    } else Alert.alert('Wrong input', 'Please insert a task');
  };
  const handleTaskDelete = function (item: any) {
    //

    Alert.alert('Deteling task', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter(
              (element: any) => element.description !== item.description
            )
          );
          setShowTasks((prevState) =>
            prevState.filter(
              (element: any) => element.description !== item.description
            )
          );
          // TODO: setShowTasks on delete;
        },
      },
    ]);
  };

  const handleComplete = function (item: {
    description: string;
    status?: boolean;
  }) {
    const oldTasks = [...tasks];
    const newTask: any = oldTasks.find(
      (obj) => obj.description === item.description
    );
    newTask.status = newTask.status === false ? true : false;
    const newTasks = Object.assign(oldTasks, newTask);
    setTasks(newTasks);
  };
  // const countIncompleteTasks = function () {
  //   let counter = 0;
  //   for (let i = 0; i < tasks.length; i++) {
  //     if (tasks[i].status === false) counter++;
  //   }
  //   console.log(counter);
  //   return counter;
  // };

  const handleFilterCompleted = function () {
    // Then this filter can filter tasks and change showTasks
    setShowTasks((prevState) => tasks.filter((el) => el.status === true));
  };
  const handleFilterIncompleted = function () {
    // Then this filter can filter tasks and change showTasks
    setShowTasks((prevState) => tasks.filter((el) => el.status === false));
  };

  return (
    <>
      <View style={styles.outerContainer}>
        <Header />
        <View style={styles.innerContainer}>
          {/* header */}
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
              onPress={handleFilterIncompleted}
            >
              <Text style={styles.incompletedTaskText}>Criadas</Text>
              <Text style={styles.taskNumber}>{'1'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.taskContainer}
              onPress={handleFilterCompleted}
            >
              <Text style={styles.completedTaskText}>Concluidas</Text>
              <Text style={styles.taskNumber}>{'1'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tasksContainer}>
            {
              <FlatList
                style={styles.flatListStyle}
                data={showTasks}
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
            }
          </View>
        </View>
      </View>
    </>
  );
}
