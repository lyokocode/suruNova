import "./navbar.scss"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from '@/store/authSlice'

export const Navbar = () => {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.auth)
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
            </div>

            <ul className="navigator">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/messenger">Mesenger</Link>
                </li>
                <li>
                    <button onClick={() => dispatch(setAuth(false))}>
                        {auth && "Logout"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}
