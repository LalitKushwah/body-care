import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TodoList from '~/components/TodoList';
import TodoItem from '../TodoItem';

describe('<TodoList/>', () => {
  const fakeTodoList = [
      { title: 'fake title-1', id: '1' },
      { title: 'fake title-2', id: '2' }
  ]
  test('it should capture snapshot of component', () => {
    const tree = render(<TodoList todos={fakeTodoList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
