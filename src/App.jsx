import { useState, useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compornents from './pages/Compornents'
import './App.css'
import Home from './pages/Home'
import Animetion from './pages/Animetion'
import Calculator from './pages/Calculator'
import ForwardToHome from './pages/ForwardToHome'
import AppLayout from './layouts/AppLayout'
import Todos from './pages/Todos'
import Products from './pages/Products'
import Carts from './pages/Carts'
import { fetchproducts } from './data/products'
import Login from './pages/Login'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProduts] = useState([])
  const [Cart, setCart] = useState([])

  useEffect(() => setProduts(fetchproducts()), [])
  useEffect(() => console.log(products), [products])

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else {
    return (
      (
        <BrowserRouter basename='/csi205/'>
          <Routes>
            <Route element={<AppLayout products={products} cart={Cart} setToken={setToken} />}>
              <Route path='home' element={<Home />} />
              <Route path='compornents' element={<Compornents />} />
              <Route path='animation' element={<Animetion />} />
              <Route path='calculator' element={<Calculator />} />
              <Route path='todos' element={<Todos />} />
              <Route path='products' element={<Products products={products} cart={Cart} setCart={setCart} />} />
              <Route path='carts' element={<Carts carts={Cart} setCart={setCart} />} />
              <Route path='*' element={<ForwardToHome />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )
    )
  }
}
export default App