import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Messenger, Login } from "@/pages"
import PrivateRoutes from './utils/PrivateRoute'
import Layout from './utils/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/messenger" element={<Messenger />} />

        </Route>
        {/* login & register page */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  )
}

export default App
