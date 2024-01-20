
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    const { auth } = useSelector(state => state.auth)
    console.log(auth)
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
