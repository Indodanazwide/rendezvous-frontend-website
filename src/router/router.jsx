import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Menu from '../pages/Menu.jsx'
import Contact from '../pages/Contact.jsx'
import Login from '../pages/Login.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx'
import Signup from '../pages/Signup.jsx'
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
        path: '/about',
        element: <About />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      }
    ],
    errorElement: <ErrorPage />,
  },
])

export default router
