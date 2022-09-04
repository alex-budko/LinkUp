import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });
  let user = null;

  try {
    await axios
      //   .post(`${process.env.REACT_APP_BACKEND_URL}/token/`, body, config)
      .post(`http://localhost:8000/auth/token/`, body, config)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        const user_data = jwt_decode(res.data.access);

        user = {
          name: user_data["name"],
          email: user_data["email"],
          uid: user_data["uid"],
        };

        localStorage.setItem("user", JSON.stringify(user));
      });

    return user;
  } catch (err) {
    return { error: true };
  }
};
