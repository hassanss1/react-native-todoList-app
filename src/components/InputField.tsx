import React, { useState } from 'react';
import { createBtnDefault } from '../assets/buttons/buttons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export function InputField() {
  const [state, setState] = useState({ isFocused: false });
  const [incompletedTasks, setIncompletedTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const _formatInput = function (text: string) {
    // This throws text to state of task
    // text.split(' ').map((word) => {
    //   fullText.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    // });
    setInput(text);
  };
  const handleIncompleteTaskAdd = function () {
    setIncompletedTasks((prevState) => [...prevState, input]);
    setInput('');
  };
  const handleFocus = function () {
    state.isFocused = true;
    setState(state);
  };
  const handleBlur = function () {
    state.isFocused = false;
    setState(state);
  };
  <View style={styles.inputContainer}>
    <TextInput
      style={[
        styles.input,
        {
          borderColor: state.isFocused ? `#5E60CE` : `#0D0D0D`,
          borderWidth: 1,
        },
      ]}
      placeholder='Add a new task'
      placeholderTextColor='#808080'
      returnKeyType='send'
      keyboardType='default'
      value={input}
      onChangeText={_formatInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
    ></TextInput>
    <TouchableOpacity
      style={styles.addButton}
      onPress={handleIncompleteTaskAdd}
    >
      <Image source={createBtnDefault} />
    </TouchableOpacity>
  </View>;
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 20,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderWidth: 1,
    color: '#F2F2F2',
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    width: '88%',
  },
  addButton: {
    height: 52,
    backgroundColor: '#fff',
    width: 52,
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
