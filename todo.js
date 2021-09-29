function Todo({todo,index,remove}){
    const { Button } = ReactBootstrap;
  return (
      <div>
        <div className="todo">{todo.text} <Button className="delete" onClick={function(){remove(index)}}>Delete</Button></div>
      </div>
  )
}
