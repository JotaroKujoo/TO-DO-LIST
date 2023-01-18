import { useState } from "react"
import { Button, Row, Col } from "react-bootstrap"


export default function Todo({todo, onUpdate, onDelete,}){
    const [isEdit, setIsEdit] = useState(false)

    

    function FormEdit(){
        const [newValue,setNewValue] = useState(todo.title)
        const HandleSubmit = (e) => {
            e.preventDefault();
        }
    
        const HandleChange = (e) => {
            const value = e.target.value
            setNewValue(value)
        }

        const HandleClickUpdate = () => {
            onUpdate(todo.id, newValue);
            setIsEdit(false)
        }

        return (
            <form className="todoUpdateForm" onSubmit={(e)=>{HandleSubmit(e)}}>
                <input type="text" className="todoInput" onChange={(e)=>{HandleChange(e)}} value={newValue} />
                <Button variant="dark" onClick={()=>{HandleClickUpdate()}} >Update</Button>
            </form>
        )
    }

    

    function TodoElement(){
        return(
            <Row>
                <Col>
                <div className="todoInfo">
                    {todo.title}
                </div>
                </Col>
                    
                <Col className="d-flex">
                    <Button variant="dark" className="ms-2 " onClick={()=>{setIsEdit(true)}}>Editar</Button>
                    <Button variant="danger" className="ms-2" onClick={()=> onDelete(todo.id)}>Eliminar</Button>
                
                </Col>
            </Row>
        )
    }

    return (
        <div>
            <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
        
        </div>
    )
}