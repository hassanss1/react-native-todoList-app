import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Images from '../../assets/icons/icons';

type Props = {
  definition: string;
  onRemove: () => void;
  onComplete: () => void;
  status?: boolean;
};

export function Task({ onRemove, onComplete, definition, status }: Props) {
  const [taskStatus, setTaskStatus] = useState(false);
  // setTaskStatus(false);

  return (
    <>
      <View style={styles.taskContainer}>
        {/* checkbox: touchableOpacity w/ Image */}
        <TouchableOpacity onPress={onComplete} style={styles.taskCheck}>
          {!taskStatus && <Image source={Images.box.inactive} />}
          {taskStatus && <Image source={Images.box.active} />}
        </TouchableOpacity>
        {/* taskName: String */}
        <Text style={styles.taskText}>
          {taskStatus
            ? definition
                .split('')
                .map((char: string) => char + '\u0336')
                .join('')
            : definition}
        </Text>
        {/* trashIcon: touchableOpacity w/ Image */}
        <TouchableOpacity onPress={onRemove} style={styles.taskDelete}>
          {!taskStatus && <Image source={Images.trash.inactive} />}
          {taskStatus && <Image source={Images.trash.active} />}
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    backgroundColor: '#262626',
    flexDirection: 'row',
    // height: 64,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderColor: `#333333`,
    borderRadius: 8,
    borderWidth: 1,
  },
  taskText: {
    color: '#F2f2f2',
    textAlign: 'center',
    justifyContent: 'center',
    maxWidth: 235,
  },
  taskDelete: {},
  taskCheck: {},
});
