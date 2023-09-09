import { memo, useContext, useState } from 'react';
import { data } from './App';
function Child2(){
    let name = useContext(data)
    console.log(name)

    return(
        <>
        
        <h1>Test2</h1>
        <h3>{name.username}</h3>
      
        </>
    )
}
export default memo(Child2)