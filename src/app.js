
import React, {Component} from 'react';
import TodoList from "./component/todoList/TodoList";
import TodoListUI from "./component/todoList/TodoListUI";
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
      {/* <TodoList />*/}
      <TodoListUI />
     </div>
    )
  }
}

export default App;