
import { useEffect, useState } from 'react';
import Button from './components/button';
import Card from './components/card';
import Heading1 from './components/heading';
import TextInput from './components/text-input';

function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [input, setInput] = useState<string>("")
  const [completedTodo, setCompletedTodo] = useState<string[]>([])
const[IsDisabled,setIsDisabled]=useState<boolean>(true)
  function handleAdd() {
    setTodo([...todo, input])
    setInput("")
  }

  function handleDelete(index:number) {
    const newArray = todo.filter((_, i) => i !== index)
    setTodo(newArray)
  }

  function handleDone(index:number) {
    const newArray = todo.filter((_, i) => i !== index)
    setCompletedTodo([...completedTodo, todo[index]])
    setTodo(newArray)
  }


  function handleCompletedtask(index:number) {
    const newDelete = completedTodo.filter((_, i) => i !== index)
    console.log(newDelete)
    setCompletedTodo(newDelete)
  }

useEffect(()=>{
if(input!==""){
setIsDisabled(false)
}
else{
setIsDisabled(true)
}
},[input])

  return (
    <div className="container">
      <Heading1 value={"Todo list"} className="text-center" />
      <div className="d-flex gap-2 ">
        <TextInput value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
        <Button label={"Add"} onClick={handleAdd} disabled={IsDisabled} />
      </div>
      <div className="mt-4 grid row text-secondary">
        <p>Task todo</p>
        {
          todo.length > 0 ?
            todo.map((item, index) => (
              <div className="col-2 p-2" >
                <Card key={index + "todo"} todo={item} onDelete={() => handleDelete(index)} onDone={() => handleDone(index)} />
              </div>
            )) :
            (
              <div className='text-success'>
                <p>nothing to show</p>
              </div>
            )
        }

      </div>

      <div className="mt-4 grid row text-danger ">
        <p>completed task</p></div>
      <div className="mt-4 grid row text-primary  ">
        {
          completedTodo.length > 0 ?
            completedTodo.map((item, index) => (
              <div className="col-2 p-2" >
                <Card key={index + "completedtodo"} todo={item} onDelete={() => handleCompletedtask(index)} />
              </div>
            )) :
            (
              <div>
                <p>nothing to show</p>
              </div>
            )
        }

      </div>
    </div>

  );
}

export default App;
