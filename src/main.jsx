import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Workout from './Pages/Workout.jsx'
import Suggestion from './Pages/Suggestion.jsx'
import { Provider } from 'react-redux'

const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    childern:[
      {
        path:"/",
        element:<Home/>,
        
      },
      {
        path:"/login",
        element:<Login/>
        
      },
      {
        path:"/signup",
        element:<Signup/>
        
      },
      {
        path:"/workouts",
        element:<Workout/>
        
      },
      {
        path:"/suggestion",
        element:<Suggestion/>
        
      }
    ]
  }
]
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
