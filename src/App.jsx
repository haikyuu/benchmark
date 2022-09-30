import React from 'react'
import { useState } from "react";
import './app.css'
export default function App() {
  let [mult, setMult] = useState(1);
  const items = Array.from(Array(10000).keys());
  return (
    <div className="container">
      <h1>Hello React</h1>
      {items.map((item, i) => (
        <button className='item' data-testid={`react-${i}`} onClick={() => setMult((va) => va + 1)} key={item}>
          {item * mult}
        </button>
      ))}
    </div>
  );
}
