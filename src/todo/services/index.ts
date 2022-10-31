import { ITask } from '..';
import * as todoApi from '../api';
export const getAllTodos = async (setTasks: React.Dispatch<React.SetStateAction<ITask[]>>) => {
  const result = await todoApi.getAllTodoById(5);
  const resultData: ITask[] = result.data;
  setTasks(resultData);
  console.log(result);
};

export const handleRemoveTask = async (id: number, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {
  const result = await todoApi.deleteByTaskId(id);
  setTrigger((value) => !value)
};