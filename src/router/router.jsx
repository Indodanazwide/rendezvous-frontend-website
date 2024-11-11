import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <h1>Login</h1>
      }
    ],
    errorElement: <ErrorPage />,
  },
])

export default router
