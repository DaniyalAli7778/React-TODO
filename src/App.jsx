import "./App.css";
import TodoForm from "./Components/TodoForm";
// import TodoItem from "./Components/ TodoItems";
import { TodoProvider } from "./cotexts";
import { useState } from "react";
function App() {
const [todos, setTodos]=useState([]);
const addTodo=(todo)=>{
setTodos((prev => [ {id:crypto.randomUUID(), ...todo},...prev]));
 
};
const updateTodo = (id, todo)=>{
 setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
}
const deleteTodo= ()=>{};
const toggleComplete= ()=>{};

  return < TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete }}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                     </div>
                    <div className="flex flex-wrap gap-y-3">
                         {/* <TodoItem/> */}
                            </div>
                </div>
            </div>
  </ TodoProvider>;
}

export default App;
