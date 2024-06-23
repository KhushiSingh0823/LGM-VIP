import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;