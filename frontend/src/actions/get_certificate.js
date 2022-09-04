import axios from "axios";

export const get_certificate = async (uid) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      //   "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };
  let data = null;
  try {
    await axios
      .get(`http://https://sussis.herokuapp.com/api/users/certificate/?uid=${uid}`, config)
      .then((res) => {
        data = res.data;
      });

    return data;
  } catch (err) {
    return { error: err };
  }
};
