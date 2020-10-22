import React from 'react';
import { useState } from 'react'

import styles from'./App.module.scss';
import List from './components/list'
import Button from './components/button'
import Counter from './components/counter'

function App() {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);


  const addItem = (text) => {
    const newItems = [...items, { text, isCompleted: false }];
    setItems(newItems);
    setTotal(total + 1);
  };


  const clearAll = () => {
    setItems([]);
    setTotal(0);
    setCompleted(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  }

  const removeItem = (index) => {
    const newItems = [...items];
    if (newItems[index].isCompleted === true) {
      setCompleted(completed - 1);
    }
    newItems.splice(index, 1);
    setItems(newItems);
    setTotal(total - 1);
  }

  const completeItem = (index) => {
    
    const newItems = [...items];
    if (newItems[index].isCompleted) {
      newItems[index].isCompleted = false;
      setItems(newItems);
      setCompleted(completed - 1);
    } else {
      newItems[index].isCompleted = true;
      setItems(newItems);
      setCompleted(completed + 1);
    }
  }


  return (
    <div className={styles.container}>
      <h1>ToDo App</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="New item"
          value={value}
          onChange={event => setValue(event.target.value)}
        >
        </input>
        <Button type="submit" text="Add" color="#00BFFF"/>
      </form>
      <h2>Your ToDo List</h2>
      <List items={items} removeItem={removeItem} completeItem={completeItem}/>
      <Counter total={total} completed={completed} items={items} />
      <Button onClick={clearAll} type="reset" text="Clear All" color="#FF6347"/>
    </div>
  );
}

export default App;
