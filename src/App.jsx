import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Login/Landing';

function App() {
  return (
    <div className='font-bold bg-gray-500 text-lg h-screen w-full '>
<Routes>
  <Route path='/' element={<Landing/>}/>
</Routes>
    </div>  
  );
}

export default App;
