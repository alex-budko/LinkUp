import axios from "axios";

export const get_user = async (uid) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    //   "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  let user = null

  try {
    await axios
      .get(`http://localhost:8000/api/users/${uid}/`, config)
      .then((res) => {
        user = res.data;
      });

    return user;
  } catch (err) {
    return { error: err };
  }
};
