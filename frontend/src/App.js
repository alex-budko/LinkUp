import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { UserContext } from "./context/User";
import { useMemo, useState } from "react";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { access: "" }
  );

  const _user = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={_user}>
        <Navbar />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="event/:title" element={<Event />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
