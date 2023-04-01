import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'



import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <Header></Header>

      <div className="main row mt-5 container-fluid overflow-hidden">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
      </div>
      


    </div>

    
  )
}

export default App
