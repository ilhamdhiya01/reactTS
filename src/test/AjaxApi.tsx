import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import IUser from './Interfaces';

function AjaxApi() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUser() {
      setLoading(true);
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
      }
    }
    getUser();
  }, []);
  return (
    <Card>
      <Card.Title>User {users.length}</Card.Title>
      <Card.Body>{loading ? <div>Loading ...</div> : <ol>{users.length > 0 ? users.map((user) => <li key={user.id}>{user.name}</li>) : <div>There are no users</div>}</ol>}</Card.Body>
    </Card>
  );
}

export default AjaxApi;
