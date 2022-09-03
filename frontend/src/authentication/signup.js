import axios from "axios";

export const signup = async (username, name, email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(username, name, email, password)
  const body = JSON.stringify({
    username,
    name,
    email,
    password,
  });
  try {
    const res = await axios.post(
    //   `${process.env.REACT_APP_API_URL}/api/users/`,
     `http://localhost:8000/api/users/`,
      body,
      config
    );

    return {success: res}

  } catch (err) {
    return {error: err}
  }
};
