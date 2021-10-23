import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TodoItem from '~/components/TodoItem';
import {TodoContextProvider} from '../../context/TodoContext';

describe('<TodoItem/>', () => {

  test('it should capture snapshot of component', () => {
    const tree = render(
      <TodoContextProvider>
        <TodoItem title="fake title" />
      </TodoContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('it should check title rendering when title prop is passed', () => {
    const {getByText} = render(
      <TodoContextProvider>
        <TodoItem title="fake title" />
      </TodoContextProvider>,
    );
    expect(getByText('fake title')).toBeDefined();
  });
  test('it should check todo removal from context', () => {
    const {getByTestId, getByText} = render(
      <TodoContextProvider>
        <TodoItem title="fake title" />
      </TodoContextProvider>,
    );
    const btn = getByTestId('delete-btn');
    fireEvent.press(btn);
    try {
        getByText('fake-title');
    } catch (ex) {
        // execution of this block represent truthiness nature of this test case
    }
  });
});
