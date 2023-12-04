import { useSelector } from "react-redux"

export default function About() {
  const countState=useSelector((state)=> state.count)
  return (
    <div className="text-center m-3">
      <h2>About</h2>
      {countState}
    </div>
  )
}
