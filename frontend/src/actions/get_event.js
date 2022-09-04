import axios from "axios";

export const get_event = async (eid) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      //   "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  let user = null;

  try {
    await axios
      .get(`http://localhost:8000/api/events/${eid}/`, config)
      .then((res) => {
        user = res.data;
      });

    return user;
  } catch (err) {
    return { error: err };
  }
};
