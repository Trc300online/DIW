import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>       
      <section className='flex bg-fons max-w-fit pl-5 rounded-2xl'>
        <img src="" alt="pfp" className='bg-gray-100 rounded-full size-[100px] place-self-center'/>
        <section className='max-w-50 m-18'>
          <section>
            <p className='font-titol text-marca'>Toni Riera Colomar</p>
            <p className='text-accent'>Informatic</p>
            <p className='text-text-clar'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
          <section className='flex pt-9 justify-around'>
            <button className='text-text-clar'>button1</button>
            <button className='text-accent'>button2</button>
          </section>
        </section>
      </section>


    </>
  )
}

export default App
