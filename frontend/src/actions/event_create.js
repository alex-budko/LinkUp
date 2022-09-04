import axios from "axios";

export const event_create = async (
  organizer,
  title,
  description,
  capacity,
  location,
  date_
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  capacity = +capacity

  const date = `${date_.year}-${date_.month}-${date_.day}`

  console.log(date)

  const body = JSON.stringify({
    organizer,
    title,
    description,
    capacity,
    location,
    date,
  });


  console.log(body);
  try {
    await axios.post(`https://sussis.herokuapp.com/api/events/`, body, config);

    return { success: true };
  } catch (err) {
    return { error: err };
  }
};
