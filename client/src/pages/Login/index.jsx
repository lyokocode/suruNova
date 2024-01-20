import "./login.scss"
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "@/store/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { auth } = useSelector(state => state.auth)

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [auth])

    const loginHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="loginPage">
            <form onSubmit={loginHandler} className="loginForm">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button
                    type="button"
                    onClick={() => dispatch(setAuth())}
                    className="loginBtn"
                >
                    Giriş Yap
                </button>
            </form>
        </div>
    )
}
