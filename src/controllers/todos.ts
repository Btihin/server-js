import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [
  {
    id: '0.7331948764044289',
    text: 'Finish the course nakonec jo a ted',
  },
  {
    id: '0.5326330461205178',
    text: 'Finish the course bbb',
  },
  {
    id: '0.8117171507995187',
    text: 'Finish the course bbb',
  },
];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json({ messsage: 'Created the todo.', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const getTodosList: RequestHandler = (req, res, next) => {
  res.send({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.status(201).json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoIndex, 1);
  res.json({ message: 'Deleted!' });
};
