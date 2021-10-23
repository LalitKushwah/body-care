import * as React from 'react';
import {useContext, useState} from 'react';
import {Modal, Portal, Button, Provider, TextInput} from 'react-native-paper';
import {TodoContext} from '../context/TodoContext';

const TodoModal = props => {
  const {addTodo} = useContext(TodoContext);
  const [textValue, setTextValue] = useState('');
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  };
  return (
    <Provider>
      <Portal>
        <Modal
          {...props}
          style={{alignItems: 'center', justifyContent: 'center'}}
          contentContainerStyle={containerStyle}
          testID='todo-modal'>
          <TextInput
            label="Enter Todo here"
            value={textValue}
            onChangeText={setTextValue}
            testID='modal-text-input'
          />
          <Button
            mode="contained"
            style={{marginTop: 30}}
            onPress={() => {
              addTodo(textValue);
              props.onDismiss();
            }}
            disabled={!textValue}
            testID='action-btn'>
            Add Todo
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default TodoModal;
