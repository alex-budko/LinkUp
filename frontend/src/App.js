import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { UserContext } from "./context/User";
import { useMemo, useState } from "react";
import Layout from "./layout/Layout";
import EventCreate from "./pages/EventCreate";
import Leaderboard from "./pages/Leaderboard";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { access: "", name: "", email: "" }
  );

  const _user = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={_user}>
        <Layout>
          <Routes>
            <Route path="" element={<Main />} />
            <Route path="profile/:username" element={<Profile />} />
            <Route path="event/:id" element={<Event />} />
            <Route path="event-create" element={<EventCreate />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="register/:eid" element={<Register />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
