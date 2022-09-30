import React, { useCallback } from 'react'
import { useState } from "react";
import './app.css'
const items = Array.from(Array(10000).keys());

export default function App() {
  let [mult, setMult] = useState(1);
  const increment = useCallback(()=>setMult((va) => va + 1), [setMult])
  return (
    <div className="container">
      <h1>Hello React</h1>
      {items.map((item, i) => (
        <button className='item react' data-testid={`react-${i}`} onClick={increment} key={item}>
          {item * mult}
        </button>
      ))}
    </div>
  );
}
