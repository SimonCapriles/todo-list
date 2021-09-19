function Todo({todo,index,remove}){
    function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
      <div>
        <div className="todo" onClick={handle}>{todo.text} (-)</div>
        <button className="delete" onClick={function(){remove(index)}}>Delete</button>
      </div>
  )
}
