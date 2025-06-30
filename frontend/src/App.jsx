import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
