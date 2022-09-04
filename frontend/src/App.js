import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { UserContext } from "./context/User";
import { useMemo, useState } from "react";
import Layout from "./layout/Layout";
import EventCreate from "./pages/EventCreate";
import Leaderboard from "./pages/Leaderboard";
import Event from "./pages/Event";
import Success from "./pages/Success";
import Landing from "./pages/Landing";
import About from "./pages/About";

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
          <Route path="" element={<Landing />} />
            <Route path="explore" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="profile/:uid" element={<Profile />} />
            <Route path="event-create" element={<EventCreate />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="success" element={<Success />} />
            <Route path="event/:eid" element={<Event />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
