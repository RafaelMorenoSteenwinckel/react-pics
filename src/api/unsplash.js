import axios from 'axios';

const BASE_URI = "https://api.unsplash.com";

const unsplashAPI = axios.create({
    baseURL: BASE_URI,
    headers: {
        Authorization: 'Client-ID T6ae7g3LkTw4BsyLYiYN99dSmkRVsxJTZo74JLn8SFs'
      },
});

export default unsplashAPI;

