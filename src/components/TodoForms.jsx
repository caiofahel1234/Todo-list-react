import {useState} from 'react'

const TodoForms = ({AddTodo}) => {
    const[value, setValue] = useState("");
    const[category, setCategory] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim() || !category) {
    alert("Por favor, preencha o texto e selecione uma categoria");
    return;
  }
        AddTodo(value,category);
        setValue("");
        setCategory("");
    }


  return (
    <div className='TodoForms'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={HandleSubmit}>
            <input type='text' placeholder='Digite o texto' value ={value} onChange={(e) => setValue(e.target.value)} ></input>
            <select value ={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Selecione uma categoria</option>
                <option value='Trabalho'>Trabalho</option>
                <option value='Pessoal'>Pessoal</option>
                <option value='Estudos'>Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForms