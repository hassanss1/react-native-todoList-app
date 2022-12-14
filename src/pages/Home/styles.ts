import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    width: '100%',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: `#1A1A1A`,
    width: '88%',
    alignItems: 'center',
  },
  tasksContainer: {
    alignItems: 'center',
    width: '100%',
  },
  flatListStyle: {
    width: '100%',
    margin: 0,
  },
  emptyMessageHeader: {
    color: `#808080`,
    fontWeight: 'bold',
  },
  emptyMessageParagraph: {
    color: `#808080`,
    fontWeight: 'normal',
  },
  emptyMessageContainer: {
    alignItems: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1,
    paddingVertical: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 20,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#F2F2F2',
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    marginBottom: 32,
    alignItems: 'center',
    width: '100%',
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
  taskContainer: {
    flexDirection: 'row',
    fontSize: 14,
    height: 19,
    width: 87,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    textAlignVertical: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 19,
    backgroundColor: `#1A1A1A`,
  },
  incompletedTaskText: {
    fontWeight: 'bold',
    color: `#4EA8DE`,
    marginRight: 8,
  },
  completedTaskText: {
    fontWeight: 'bold',
    color: `#8284FA`,
    marginLeft: -18,
    marginRight: 8,
  },
  taskNumber: {
    color: `#D9D9D9`,
    borderRadius: 999,
    backgroundColor: `#333333`,
    width: 25,
    height: 19,
    textAlign: 'center',
    justifyContent: 'center',
    // paddingVertical: 2,
    // paddingHorizontal: 8,
    // marginLeft: 8,
  },
  // taskList: {
  //   backgroundColor:
  // }
});
