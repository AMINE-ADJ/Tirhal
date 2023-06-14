import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/homePage';
import Landing from './Components/Login/Landing';



function App() {
  return (
    <div className=' '>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/auth' element={<HomePage/>}/>
</Routes>
    </div>  
  );
}

export default App;
