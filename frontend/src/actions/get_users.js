import axios from "axios";

export const get_users = async (page) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    //   "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  let users = null;

  try {
    await axios
      .get(`http://https://sussis.herokuapp.com/api/users/`, config)
      .then((res) => {
        users = res.data;
      });

    return users;
  } catch (err) {
    return { error: err };
  }
};
