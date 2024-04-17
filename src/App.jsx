import { useState } from "react";

function App() {

  let [count,setCount]=useState(0);


  const increment=()=>{
    console.log(count);
    setCount(count+1);
  }

  const decrement=()=>{
    if(count>0) setCount(count-1);
    console.log(count);}





  
  
  return (
  <>
    <div className="  text-white text-2xl  bg-slate-950">
      <button className="rounded-full w-12 absolute top-4 right-16 h-12 text-sm bg-red-900 p-1 hover:bg-red-600  duration-500 ">Reset</button>
      </div>
      < div className="grid h-screen place-content-center bg-slate-950">  
       <div className="flex gap-9 "> 
          <button className="p-3 rounded-xl transition duration-500  bg-white text-slate-800  hover:bg-orange-600 hover:text-white" onClick={()=>increment(count)}>Increment</button>

          <span className="w-20 rounded-lg text-black text-center
           bg-white grid place-items-center ">
            {count}
          </span>

          <button className="p-3 rounded-xl transition duration-500  bg-white text-slate-800  hover:bg-orange-600 hover:text-white" 
            onClick={increment}>
            Decrement
          </button>
          
          <button className="p-3 rounded-xl transition duration-500  bg-red-600 text-white  hover:bg-white hover:text-red-700" 
             onClick={decrement}>
            Delete
          </button>

       </div>
    </div>
  </>
  )
}


export default App;
