
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { add,remove } from './Store/countSlice';
function App() {
 
  const count=useSelector((state)=>state.counter);
  const dispatch=useDispatch();

  return (
    <>
        <h1>this is a react project:{count}</h1>
        <button onClick={()=>dispatch(add())}>add</button>
        <button onClick={()=>dispatch(remove())}>remove</button>
    </>
  )
}

export default App
