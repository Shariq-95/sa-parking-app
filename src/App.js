import './App.css';
import Header from "./MyComponents/Header";
// import About from './MyComponents/About';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const getLocalData = () => {
  const lists = localStorage.getItem("counter");

  if (lists) {
    return JSON.parse(lists);
  }
  else {
    return [];
  }
};


function App() {
  const [count, setCount] = useState(getLocalData());
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (driver, numberplate, entry, exit) => {
    console.log("I am adding this todo", driver, numberplate, entry, exit)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      driver: driver,
      numberplate: numberplate,
      entry: entry,
      exit: exit
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Parking App" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} count={count} setCount={setCount}/>
              <Todos todos={todos} count={count} setCount={setCount} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          {/* <Route exact path="/about" >
            <About />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
