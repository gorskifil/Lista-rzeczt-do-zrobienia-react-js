import React, { Component } from 'react';
import ToDos from './components/ToDos'
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';





class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "wyrzuć śmieci",
        zrobione: true
      },
      {
        id: 2,
        title: "zrobić obiad",
        zrobione: false
      },
      {
        id: 3,
        title: "zrobić kurs",
        zrobione: false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }  
  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4, 
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ] });
  }
  
  render() {
      
      return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <ToDos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
      </div>
      );
    }  
  
  
}
export default App;
 