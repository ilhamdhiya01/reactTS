import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import ITask from './Interfaces';

function Todo() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const handleAddTask = (e: any): void => {
    e.preventDefault();
    const dataTask = {
      id: Math.floor(Math.random() * Date.now()),
      name: newTask,
      complete: false,
    };
    setTasks((prev) => [...prev, dataTask]);
    setNewTask('');
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
              <li key={task.id} className='flex justify-between items-center mt-2'>
                <div className='flex gap-2'>
                  {task.name}
                  <span>{task.complete ? 'complete' : 'incomplete'}</span>
                </div>
                <div className='flex items-center gap-2'>
                  {!task.complete ? (
                    <>
                      <Button className='border border-slate-400 rounded-sm text-xs px-2 py-1' text='Delete' />
                      <Button className='border border-slate-400 rounded-sm text-xs px-2 py-1' text='Update' />
                    </>
                  ) : null}
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

export default Todo;
