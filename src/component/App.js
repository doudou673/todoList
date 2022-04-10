import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    // console.log(dataList);
    return (
      <React.StrictMode>
        <TodoList/>
      </React.StrictMode>
    )
  }
}

export default App;