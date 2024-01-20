import "./navbar.scss"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/authSlice';
import axios from "axios"
export const Navbar = () => {


    const { auth } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = async () => {
        if (auth) {
            try {
                await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/auth/logout/${auth.id}`);
                dispatch(logout());
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
    };
    return (
        <nav className="navbar">

            <ul className="navigator">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/messenger">Mesenger</Link>
                </li>
                <li>
                    <button
                        onClick={handleLogout}
                    >
                        {"Logout"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}
