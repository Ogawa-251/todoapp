import React, { useState } from 'react';
import "./App.css";
import InputForm from './components/InputForm'; // 正しいパスとインポート名
import { Title } from "./components/Title"; // 波括弧でTitleをインポート
import TodoList from './components/TodoList';


function App() {
  const [taskList, setTaskList] = useState([]);


  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList}/>

    </div>
  );
}

export default App;
