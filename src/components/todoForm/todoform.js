import {useRef} from "react";
import styles  from "./todoform.module.css";
import { useValue } from "../../dataContext";

export default function TodoForm (){
    const inputRef = useRef();
    const {addTodo} = useValue();
    
    const handleSubmit = (e)=>{
        addTodo(inputRef.current.value);
        inputRef.current.value = "";
    }
    
    return(
        <div className={styles.form_container}>
            <input className={styles.inputBox} ref={inputRef} placeholder="What are your tasks for today?"/>
            <button className={styles.addBtn} onClick={()=>handleSubmit()}>Add</button>
        </div>
    )
}