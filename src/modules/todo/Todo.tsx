import * as React from 'react';

// import { TodoInput } from './TodoInput';
// import { TodoList } from '../counter/container/TodoList';
// import { TodoFilter } from '../counter/container/TodoFilter';

// Types
import { RouteComponentProps } from 'react-router';
interface NavParams {}
interface TodoProps extends RouteComponentProps<NavParams> {}
// End of Types

export const Todo: React.SFC<TodoProps> = (props) => {
  return (
    <p>
      TODO
      {/*Clicked: {props.value} times*/}
      {/*{' '}*/}
      {/*<button onClick={props.increment}>*/}
        {/*+*/}
      {/*</button>*/}
      {/*{' '}*/}
      {/*<button onClick={props.decrement}>*/}
        {/*-*/}
      {/*</button>*/}
    </p>
  );
};
