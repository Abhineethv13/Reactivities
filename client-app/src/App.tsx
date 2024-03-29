import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './demo'

import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/activities')
  .then(
    response => {
      
      setActivities(response.data);
    })
}, [])

  return (
    <div >
      <Header as='h2' icon='users' content='Reactivities'></Header>
        
        <List>
          {
            activities.map((activity: any) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))
          }
        </List>
        <Button content='test'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
