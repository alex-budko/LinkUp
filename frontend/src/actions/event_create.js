import axios from "axios";

export const event_create = async (
  organizer,
  title,
  description,
  tags,
  capacity,
  location
) => {
  capacity = +capacity;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    organizer,
    title,
    description,
    tags,
    capacity,
    location,
  });

  console.log(body);
  try {
    await axios.post(`http://localhost:8000/api/events/`, body, config);

    return { success: true };
  } catch (err) {
    return { error: err };
  }
};
