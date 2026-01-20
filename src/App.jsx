import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AppliedJobs from "./pages/AppliedJobs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostedJobs from "./pages/user/postedjobs";
import NewEditJob from "./pages/user/postedjobs/NewEditJob";
import Profile from "./pages/user/profile";
import "./stylesheets/custom-components.css";
import "./stylesheets/layout.css";

function App() {
  const { loading } = useSelector((state) => state.alert);
  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applied-jobs"
            element={
              <ProtectedRoute>
                <AppliedJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted-jobs"
            element={
              <ProtectedRoute>
                <PostedJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted-jobs/new"
            element={
              <ProtectedRoute>
                <NewEditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted-jobs/edit/:id"
            element={
              <ProtectedRoute>
                <NewEditJob />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
