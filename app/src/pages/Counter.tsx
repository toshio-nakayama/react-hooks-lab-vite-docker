import { useCounter } from '../stores/counter'

export default function Counter() {
  const { count, inc, dec, reset } = useCounter()
  return (
    <div style={{ padding: 16 }}>
      <h1>Counter (Zustand)</h1>
      <p style={{ fontSize: 24 }}>count: {count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}
