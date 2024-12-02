import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/login/login';
import Dashboard from './pages/admin/dashboard/dashboard';


function App() {
  return (

    <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
              
    </Routes>
   
  )
}

export default App;
