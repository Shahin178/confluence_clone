import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../authContext";

const Navbar = () => {
  // const { token, logout } = useAuth();
  const navigate = useNavigate();
  const token = "1we";
  const handleLogout = () => {
    // logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md rounded-lg mx-4 my-4 px-8 py-3 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 tracking-tight hover:text-blue-600 transition-colors"
      >
        Confluence Clone
      </Link>
      <div className="space-x-6 flex items-center">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/search"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Search
        </Link>
        {token ? (
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded transition-colors font-semibold shadow-sm"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded transition-colors font-semibold shadow-sm ml-2"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
