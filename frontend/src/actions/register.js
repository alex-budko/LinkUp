import axios from "axios";

export const register = async (uid, eid) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    //   "Authorization": `Bearer ${localStorage.getItem('access')}`
    },
  };

  uid = +uid
  eid = +eid
  const body = JSON.stringify({
    uid,
    eid,
  });

  try {
    await axios.post(`http://localhost:8000/api/register/`, body, config);

    return { success: true };
  } catch (err) {
    console.log(err)
    return { error: err };
  }
};
