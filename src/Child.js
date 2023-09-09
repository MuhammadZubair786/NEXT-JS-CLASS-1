import { memo, useContext, useState } from 'react';
import Child2 from './Child2';
import App from './App';

function Child(){
  

    return(
        <>
        
        <h1>Test</h1>
        <Child2/>
        </>
    )
}
export default memo(Child)