import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <div style={{ padding: 12 }}>
          <nav style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/counter">Counter</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
