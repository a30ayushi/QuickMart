import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/quickmart-d8164/us-central1/api' //The API URL
});

export default instance;