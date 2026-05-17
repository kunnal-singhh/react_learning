
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement ,incrementByAmount} from './features/counter/counterSlice'


function App() {
  const [num,setNum]=useState()
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)
  return (
    <>
    <div class='counterDiv'> 
      <h1 >{count}</h1>
      <div class='btnDiv'>  
        <button 
         onClick={ ()=>{ 
          dispatch(increment())
         } }
        >Increment</button>
      <button  
      onClick={()=>{ 
        dispatch(decrement())
      }}>Decrement</button>
    
      </div>
      <div class='customCounterDiv'> 
        <input 
         type='number'
         value={num}
         onChange={(e)=>setNum(e.target.value)}
        > 
        
        </input>
          <button  
          style={{width:'100%'}}
      onClick={()=>{ 
        dispatch(incrementByAmount(Number(num)))
      }}>Increment by {num}</button>
      </div>
    </div>
      
    </>
  )
}

export default App
