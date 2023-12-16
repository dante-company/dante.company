import { API_URL } from "../constants/env";
import axios from "axios";
import NewsletterAPI from "./newsletter";

export const API = axios.create({
  baseURL: API_URL,
});

export { NewsletterAPI };
