import { createContext } from "react";

export const UserContext = createContext(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {name: "", access: ""})