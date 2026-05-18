import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h2>Counter: {count}</h2>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
