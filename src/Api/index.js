import axios from "axios";
export const API_URL = ""

const API = axios.create({ baseURL: API_URL });

export const signIn = (formData) => API.post("/signIn", formData);
export const signUp = (formData) => API.post("/signUp", formData);