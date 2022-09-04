export const log_out = async (setUser) => {
  localStorage.removeItem("access");
  localStorage.removeItem("user");
  setUser({ name: "", access: "" });

  return { sucess: true };
};
