import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {   //parent component

  const [counterOne, setcounterOne] = useState(0);
  const [countertwo, setcountertwo] = useState([]);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1)
  }

  const fun = useCallback(()=>{
    console.log("hello vijay");
  }, countertwo);

  return (
    <div>
      <Child countertwo={countertwo} fun={fun}/>
      <button onClick={IncrementOne}>counterOne - {counterOne}</button>
    </div>
  )
}

export default Parent
