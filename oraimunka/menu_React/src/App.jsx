import {Routes,Route, BrowserRouter} from 'react-router-dom'

import { About, Home, Contact, Services } from './components/pages'
/*import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Services } from './components/pages/Services'*/
import './App.css'

function App() {


  return (
    <>

      <div className='App'>
        <h1>Működik eskü</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Services' element={<Services/>}/>
          
        </Routes>
        </BrowserRouter>

      </div>
    
    </>
  )
}

export default App
