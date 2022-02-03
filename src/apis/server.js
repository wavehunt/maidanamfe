import axios from "axios";
import { API_URL } from "../app/appcons";

export default axios.create({
    baseURL: API_URL
});
