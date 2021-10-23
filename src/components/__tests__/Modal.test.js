import React from 'react';
import {fireEvent, render, waitFor } from '@testing-library/react-native';
import Modal from '~/components/Modal';
import {TodoContextProvider} from '../../context/TodoContext';

describe('<TodoList/>', () => {
  test('it should capture snapshot of component', () => {
    const tree = render(<TodoContextProvider><Modal /></TodoContextProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('it should test input rendering inside modal', () => {
    const { queryByTestId } = render(<TodoContextProvider><Modal visible={true}/></TodoContextProvider>);
    expect(queryByTestId('modal-text-input')).toBeTruthy();
  });
  test('it should test button rendering inside modal', () => {
    const {queryByTestId} = render(<TodoContextProvider><Modal visible={true}/></TodoContextProvider>);
    const btn = queryByTestId('action-btn');
    expect(btn).toBeTruthy();
  });
  test('it should check handler is not getting called when button is pressed without any input value', async () => {
    const mockHandler = jest.fn();
    const {queryByTestId} = render(<TodoContextProvider><Modal visible={true} onDismiss={mockHandler}/></TodoContextProvider>);
    const btn = queryByTestId('action-btn');
    fireEvent.press(btn);
    await waitFor(() => expect(mockHandler).not.toHaveBeenCalled());
  });
  test('it should check handler is getting called when button is pressed with input value', async () => {
    const mockHandler = jest.fn();
    const {queryByTestId} = render(<TodoContextProvider><Modal visible={true} onDismiss={mockHandler}/></TodoContextProvider>);
    const btn = queryByTestId('action-btn');
    const input = queryByTestId('modal-text-input');
    fireEvent.changeText(input, 'test');
    fireEvent.press(btn);
    await waitFor(() => expect(mockHandler).toHaveBeenCalled());
  });
});
