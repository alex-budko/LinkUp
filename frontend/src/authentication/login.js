import axios from "axios";

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

  try {
    await axios
      //   .post(`${process.env.REACT_APP_BACKEND_URL}/token/`, body, config)
      .post(`http://localhost:8000/auth/token/`, body, config)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
      });

    return { success: true };
  } catch (err) {
    return { error: err };
  }
};
