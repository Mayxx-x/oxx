import { useState } from 'react'
import { Toaster } from "@/components/ui/sonner"
import Home from './pages/Home'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <section className='bg-[#0e0e1b] bg-[url("src/assets/oxx.png")] bg-cover bg-fixed bg-no-repeat bg-top'>
        <Home />
      </section>

      <Toaster className='bg-[0e0e1b]' />
    </QueryClientProvider>
    </>
  )
}

export default App
