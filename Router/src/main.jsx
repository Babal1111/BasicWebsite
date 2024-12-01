import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"",
        element:<Home/>
      },
      {path:'about',
        element:<About/>
      },{
        path:'contactUs',
      element:<ContactUs></ContactUs>      }]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>

    {/* <App /> */}
  </StrictMode>,
)
