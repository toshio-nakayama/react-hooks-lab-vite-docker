import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ['now'],
    queryFn: () =>
      new Promise<{ now: string }>((resolve) =>
        setTimeout(() => resolve({ now: new Date().toLocaleString() }), 400),
      ),
  })
  return (
    <div style={{ padding: 16 }}>
      <h1>Home</h1>
      <p>React Query demo</p>
      {isPending ? <p>Loading...</p> : <p>Now: {data?.now}</p>}
    </div>
  )
}
