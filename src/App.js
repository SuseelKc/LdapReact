import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/login/login'


function App() {
  return (
    <div className="container">
      <Routes>
            <Route path='/' element={<Login/>}/>
      </Routes>
  
    </div>
  )
}

export default App;
