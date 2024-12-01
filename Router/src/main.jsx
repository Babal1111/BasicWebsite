import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
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
      element:<ContactUs></ContactUs>      },
      {
        path: 'user/:id',  // This defines the parameter
        element: <User />
      },
      {
        path: 'github',  // This defines the parameter
        element: <Github />
      }
    ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>

    {/* <App /> */}
  </StrictMode>,
)
