import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/login/login';
import Dashboard from './pages/admin/dashboard/dashboard';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//imported bootstrap

function App() {
  return (

    <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
              
    </Routes>
   
  )
}

export default App;
