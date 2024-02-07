import { useSelector, useDispatch } from "react-redux"
import { increment,decrement } from "./CounterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
   <section>
    <p>{count}</p>
    <button onClick={() => dispatch(increment()) }>Add</button>
    <button onClick={() => dispatch(decrement()) }>Minus</button>
   </section>
  )
}

export default Counter