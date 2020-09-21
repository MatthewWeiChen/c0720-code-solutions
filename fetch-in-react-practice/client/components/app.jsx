import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', init)
      .then(response => response.json())
      .then(data => this.setState({ todos: this.state.todos.concat(data) }));
  }

  toggleCompleted(todoId) {
    const findTodo = this.state.todos.map(todo => (
      todo.id === todoId
        ? {
          ...todo,
          isCompleted: true
        } : todo)
    );
    const init = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: true })
    };
    fetch(`/api/todos/${todoId}`, init)
      .then(res => res.json())
      .then(data => this.setState({ todos: findTodo }));
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
