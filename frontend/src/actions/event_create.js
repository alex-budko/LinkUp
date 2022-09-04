import axios from "axios";

export const event_create = async (
  organizer,
  title,
  description,
  tags,
  capacity,
  location,
  // date_
) => {
  capacity = +capacity;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const date = `${date_.year}-${date_.month}-${date_.day}`
  const body = JSON.stringify({
    organizer,
    title,
    description,
    tags,
    capacity,
    location,
    // date,
  });


  console.log(body);
  try {
    await axios.post(`http://localhost:8000/api/events/`, body, config);

    return { success: true };
  } catch (err) {
    return { error: err };
  }
};
