import axios from "axios";

export const get_user_events = async (uid) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  let events = null;

  try {
    await axios
      .get(`http://https://sussis.herokuapp.com/api/users/events/?uid=${uid}`, config)
      .then((res) => {
        events = res.data;
      });

    return events;
  } catch (err) {
    return { error: err };
  }
};
