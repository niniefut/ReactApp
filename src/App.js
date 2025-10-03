import React from 'react'
import Products from './components/Products'
import About from './components/About'
import News from './components/News'
import Contact from './components/Contact'
import Shop from './components/Shop'
import Services from './components/Services'
import Home from './components/Home'
const App = () => {
    return(
        <div>
            <h2>This is my App Component</h2>
            <Home/>
            <About/>
            <Products/>
            <News/>
            <Contact/>
            <Shop/>
            <Services/>
        </div> 
    )
}
export default App