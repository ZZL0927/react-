import Login from '../pages/login/login.jsx'
import Admin from '../pages/admin/admin.jsx'
import { Navigate } from 'react-router-dom'

export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/admin',
        element:<Admin/>
    },
    {
        path:'/',
        element:<Navigate to='/admin'/>
    }
]