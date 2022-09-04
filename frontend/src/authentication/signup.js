import axios from "axios";

export const signup = async (name, email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(name, email, password)
  const body = JSON.stringify({
    name,
    email,
    password,
  });
  try {
    const res = await axios.post(
    //   `${process.env.REACT_APP_API_URL}/api/users/`,
     `https://sussis.herokuapp.com/api/users/`,
      body,
      config
    );

    return {success: res}

  } catch (err) {
    return {error: err}
  }
};
