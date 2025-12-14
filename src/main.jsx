import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import '../src/component/styles/styles.css'
import { Home } from './component/Home-page/home'
import { Store } from './component/Store-page/store'
import { Cart } from './component/Cart-page/cart'
import { App } from './App'

//handle page routing

const router =createBrowserRouter([
  { path: '/', element:<App />,
    children: [
      { path: '/', element: <Home />},
      { path: 'Store', element: <Store />},
      { path: 'Cart', element: <Cart />},
    ],
    errorElement:<div> Error 404!</div>},

  //otherpages go here
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
