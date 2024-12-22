import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='h-screen bg-slate-700 flex items-center  '>
        <div className='bg-red-900 max-w-md h-1/3 w-1/3 mx-auto '>
            <form>
                <div>
                  <InputBox
                    
                  />

                </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default App
