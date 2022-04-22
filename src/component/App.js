import React from "react";
import TodoList from "./TodoList";
import HooksTodoList from './HooksTodoList';
class App extends React.Component {
  render() {
    // console.log(dataList);
    return (
      <React.StrictMode>
        <TodoList />
        <HooksTodoList />
      </React.StrictMode>
    )
  }
}

export default App;