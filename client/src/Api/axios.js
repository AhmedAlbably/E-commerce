import axios from "axios";
import { BASE_URL } from "./Api";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get("token");

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});