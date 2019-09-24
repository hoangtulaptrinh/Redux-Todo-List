import React from 'react';
import './App.css';
import Title from './components/Title'
import InputList from './components/Input'
import List from './components/List'
function App() {
  return (
    <div className="App">
      <Title>Todo-App</Title>
      <InputList />
      <List />
    </div>
  );
}

export default App;
