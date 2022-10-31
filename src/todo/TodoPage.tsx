import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { ITask } from '.';
import { getAllTodos, handleRemoveTask } from './services';

function TodoPage() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    getAllTodos(setTasks);
  }, [trigger]);

  const handleAddTask = (e: any): void => {
    e.preventDefault();
    // const dataTask: ITask = {
    //   id:
    // };
    // setTasks((prev) => [...prev, dataTask]);
    // setNewTask('');
  };
  const handleUpdateTask = (id: number) => {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          complete: true,
        };
      }
      return task;
    });
    setTasks(updateTask);
  };

  return (
    <Card>
      <Card.Title>Todo</Card.Title>
      <Card.Body>
        <form>
          <div className='flex items-center gap-2'>
            <Input value={newTask} onChange={(e: any) => setNewTask(e.target.value)} name='task' />
            <Button onClick={handleAddTask} className='text-xs border border-slate-400 h-10 whitespace-nowrap items-center rounded-md text-white bg-black inline-flex justify-center px-2 py-1' text='Add task' />
          </div>
        </form>
        {tasks.length > 0 ? (
          <ol className='space-y-2 mt-3 divide-y'>
            {tasks.map((task) => (
              <li key={task.id} className='flex justify-between items-center pt-2'>
                <div className='flex gap-2'>
                  {task.todo_message}
                  {/* <span className={`text-white basis-0  ${task.complete ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded-md text-xs`}>{task.complete ? 'Complete' : 'Incomplete'}</span> */}
                </div>
                <div className='flex items-center gap-2'>
                  <Button onClick={() => handleRemoveTask(task.id, setTrigger)} className='border border-slate-400 rounded-md text-xs px-2 py-1' text='Remove' />
                  {/* {!task.complete ? (
                    <>
                      <Button onClick={() => handleUpdateTask(task.id)} className='border border-slate-400 rounded-md text-xs px-2 py-1' text='Complete' />
                      <Button onClick={() => handleRemoveTask(task.id)} className='border border-slate-400 rounded-md text-xs px-2 py-1' text='Remove' />
                    </>
                  ) : (
                    <Button onClick={() => handleRemoveTask(task.id)} className='border border-slate-400 rounded-md text-xs px-2 py-1' text='Remove' />
                  )} */}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>You have {tasks.length} tasks</Card.Footer>
    </Card>
  );
}

export default TodoPage;
