import './App.css'
import { Route, Routes } from 'react-router-dom'
import Helloworld from './components/test'

function App() {
  return (
    <div className='font-bold bg-gray-500 text-lg h-screen w-full '>
<Routes>
  <Route path='/' element={<Helloworld/>}/>
</Routes>
    </div>
      
  )
}

export default App
