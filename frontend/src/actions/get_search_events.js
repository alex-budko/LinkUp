import axios from "axios";

export const get_search_events = async (search) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  let events = null;

  try {
    await axios
      .get(`http://https://sussis.herokuapp.com/api/events/search/?q=${search}`, config)
      .then((res) => {
        events = res.data;
      });

    return events;
  } catch (err) {
    return { error: err };
  }
};
