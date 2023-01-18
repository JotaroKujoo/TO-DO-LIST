import { useState } from "react"
import Todo from "../Todo/Todo";
import {Card} from "react-bootstrap"

export default function TodoApp(){
    const [title,setTitle] = useState("");
    const [todos, setTodos] = useState([] )
    const HandlerClick = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        }

        const temp = [...todos]
        temp.unshift(newTodo)

        setTodos(temp)

        setTitle("")
    }

    const InputHandler = (e) => {
        const value = e.target.value

        setTitle(value)
    }

    const  HandleUpdate = (id, value) => {
        const temp = [...todos]
        const item = temp.find((item)=>item.id === id)
        item.title = value
        setTodos(temp)
    }

    const HandlerDelete = (id) => {

        const temp = todos.filter(item => item.id !== id)

        setTodos(temp)

    }

    return (
        <div className="todoContainer mt-5">
            <form className="todoCreateForm mb-5">
                 <input onChange={(e)=>{InputHandler(e)}} value={title} className="todoInput"/>
                 <input onClick={(e)=> {HandlerClick(e)}} type="submit" value="Create todo" className="buttonCreate" />

            </form>

            <div className="todosContainer mt-3 d-flex justify-content-center flex-column align-items-center ">
                {todos.map((todo)=>{
                    return(
                        <Card className="p-2 m-2">
                            <Todo key={todo.id} todo={todo} onUpdate={HandleUpdate} onDelete={HandlerDelete}/>
                        </Card>

                    )
                })}
            </div>
        </div>
    )
}
