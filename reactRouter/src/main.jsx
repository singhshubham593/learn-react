import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
/*
//router creation Type one
const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "home",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      }
    ]
  }
])
*/

//router creation Type two
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route loader={githubInfoLoader} path='github' element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
