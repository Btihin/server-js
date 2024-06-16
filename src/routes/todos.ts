import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodos,
  getTodosList,
  updateTodos,
} from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/list', getTodosList);
router.patch('/:id', updateTodos);
router.delete('/:id', deleteTodo);

export default router;
