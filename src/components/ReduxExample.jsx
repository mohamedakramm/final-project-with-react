import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { DECREMENT, INCREMENT } from "../redux/actions/types"


export default function ReduxExample() {
  const countState=useSelector((state)=> state.count)
  const dispatch =useDispatch()
  // const [count,setCount]=useState(0)
  let IncreaseCount=()=>{
    dispatch({
      type:INCREMENT
    })
  }
  let DecreaseCount=()=>{
    dispatch({
      type:DECREMENT
    })
  }
  return (
    <div className="m-3 text-center">
        <h2>ReduxExample</h2>
        <Button onClick={IncreaseCount} variant="primary">+</Button>
        {countState}
        <Button onClick={DecreaseCount} variant="danger">-</Button>
    </div>
  )
}
