import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import './App.css';
import Child from './Child';

let data = createContext() // data =>store 
let data1 = createContext() // data =>store 
function App() {
  let [name,setname]= useState({
    username:"smit",
    usertest:""
  }) //value

  let count = 0

  // let [Count, setCount] = useState(0)
  // let [Check, setCheck] = useState(100)
  // function add() {
  //   console.log("test1")
  //   let b = 5 +3*9+9+9+(9+8)
  //   console.log(b)
  //   return Count * 10
  // }

  // function add1() {
  //   console.log("test1")
  //   return Check * 10
  // }

  // let add = useMemo(
  //   function add() {
  //     console.log("test1")
  //     return Count * 10
  //   }, [Count]
  // )

  function test() {

  }

  // let add1 = useMemo(() => {
  //   console.log("TEST CHECK")
  //   return Check * 10
  // },[Check]
  // )
  // let testdata = useCallback(test,[Count]) //returnh function
  return (
    <>
      <data.Provider value={name}>
        <h1>Hello User</h1>
        <input type='text' onChange={(e)=>setname({...name,username:e.target.value})}/>
        <Child />
      </data.Provider >
    </>
  );
}

export default App;
export {data}
